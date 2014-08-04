var Model = {

    getUsers: function(yield) {

        Storage.collection('user/all', 'users', yield);

    },

    getRoles: function(yield) {

        yield([
            'field-staff', 
            'call-center', 
            'driver', 
            'admin', 
            'depot-manager'
        ]);

    },

    getUsersByRole: function(role, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, role);
        }

        Model.getRoles(function(roles) {

            if (!_.contains(roles, role)) {
                return App.error({
                    responseJSON: { message: 'Application error: "' + role + '" is not a valid user role.' }
                });
            }
    
            Model.getUsers(function(users) {
                yield(_.filter(users, function(item) {
                    return item.role == role;
                }));
            });

        });
    },

    getUser: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getUsers(function(users) {
            Storage.find(id, users, yield);
        });

    },

    getAreaUsers: function() {

        Storage.load('area-user', 'area-users', yield);

    },

    getAreas: function(yield) {

        var resources = {
            areas     : 'area',
            areaUsers : 'area-user'
        };

        var decorator = function(resp) {

            var areas = Storage.toMap(resp.areas);

            _.each(areas, function(a) {
                a.fieldstaffUser = null;
                a.callcenterUser = null;
            });

            _.each(resp.areaUsers, function(au) {
                switch (au.role) {
                    case 'field-staff':
                        if (areas.hasOwnProperty(au.areaId)) {
                            areas[au.areaId].fieldstaffUser = au;
                        }
                        break;
                    case 'call-center':
                        if (areas.hasOwnProperty(au.areaId)) {
                            areas[au.areaId].callcenterUser = au;
                        }
                        break;
                }
            });

            return areas;

        };

        Storage.load(resources, 'areas', yield, decorator);

    },

    getAreasForRegion: function(regionId, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, regionId);
        }

        Model.getAreas(function(areas) {
            yield(_.filter(areas, function(item) {
                return item.regionId == regionId;
            }));
        });

    },

    getAreasForDepot: function(depotId, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, depotId);
        }

        Model.getAreas(function(areas) {
            yield(_.filter(areas, function(item) {
                return item.depotId == depotId;
            }));
        });

    },

    getArea: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getAreas(function(areas) {
            Storage.find(id, areas, yield);
        });

    },

    getCustomers: function(yield) {

        Storage.collection('customer', 'customers', yield);

    },

    getCustomer: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getCustomers(function(customers) {
            Storage.find(id, customers, yield);
        });

    },

    getPriceCategories: function(yield) {

        Storage.collection('price-category', 'price-categories', yield);

    },

    getPriceCategory: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getPriceCategories(function(categories) {
            Storage.find(id, categories, yield);
        });

    },

    getDepots: function(yield) {
        Model.getUsers(function(users) {

            var managers = _.filter(users, function(user) {
                return user.role == 'depot-manager';
            });

            var decorator = function(resp) {

                var depots = Storage.toMap(resp);
                
                _.each(managers, function(man) {
                    if (depots.hasOwnProperty(man.depotId)) {
                        depots[man.depotId].depotManager = man;
                    }
                });

                return depots;

            };

            Storage.load('depot', 'depots', yield, decorator);

        });
    },

    getDepot: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getDepots(function(depots) {
            Storage.find(id, depots, yield);
        });

    },
    
    getDepotsForRegion: function(regionId, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, regionId);
        }

        Model.getDepots(function(depots) {
            yield(_.filter(depots, function(depot) {
                return depot.regionId == regionId;
            }));
        });

    },

    getRegions: function(yield) {

        Storage.collection('region', 'regions', yield);

    },

    getRegion: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getRegions(function(regions) {
            Storage.find(id, regions, yield);
        });

    },

    getContactTypes: function(yield) {
        yield({
            'physical-address' : 'Physical Address',
            'po-box-address'   : 'P.O. Box Address',
            'landline-phone'   : 'Landline Phone Number',
            'mobile-phone'     : 'Mobile Phone Number',
            'email-address'    : 'Email Address'
        });
    },

    getContactsForCustomer: function(customerId, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, customerId);
        }

        Storage.load('contact/customer/' + customerId, 'contacts-customer-' + customerId, yield);

    },

    getContact: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Storage.load('contact/' + id, 'contact-' + id, yield);

    },

    getComplaints: function(id, yield) {

    },

    getComplaint: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

    },

    getDamageTypes: function(yield) {

        Storage.collection('stock-damage-type', 'stock-damage-types', yield);

    },

    getDamageType: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getDamageTypes(function(damageTypes) {
            Storage.find(id, damageTypes, yield);
        });

    },

    getVehicles: function(yield) {

        Storage.collection('vehicle', 'vehicles', yield);

    },

    getVehicle: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getVehicles(function(vehicles) {
            Storage.find(id, vehicles, yield);
        });

    },

    getProducts: function(yield) {
    
    },

    getActiveProducts: function(yield) {

    },

    getDeletedProducts: function(yield) {

    },

    getProduct: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

    },

    getWeightClasses: function(yield) {

        Storage.collection('weight-category', 'weight-categories', yield);

    },

    getWeightClass: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

        Model.getWeightClasses(function(weightClasses) {
            Storage.find(id, weightClasses, yield);
        });

    },

    getMaintenanceTypes: function(yield) {

    },

    getMaintenanceType: function(id, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, id);
        }

    },

    getOrders: function(yield) {

    },

    getOrdersWithStatus: function(type, yield) {

    },

    getStockForDepot: function(depotId, yield) {

        if (typeof yield === 'undefined') {
            return _.partial(arguments.callee, depotId);
        }

        Storage.load('stock/depot/' + depotId, 'stock-' + depotId, yield);

    },

    readableRoleName: function(role) {
        switch (role) {
            case 'field-staff': 
                return 'Field Staff';
            case 'depot-manager': 
                return 'Depot Manager';
            case 'admin': 
                return 'Administrator';
            case 'call-center': 
                return 'Call Center';
            case 'driver': 
                return 'Driver';
            default:
                return 'Unknown';
        }
    }

};

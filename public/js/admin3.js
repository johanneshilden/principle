App.init({
    routes: {
        ""                              : "index",
        "flush"                         : "emptyCache",
        "logout"                        : "logout",
        "queue"                         : "showQueue",
        "profile"                       : "showUserProfile",
        "user/password"                 : "updatePassword",
        // ---------------------------- :
        // area                         :
        // ---------------------------- :
        "areas"                         : "showAreas",
        "area/create/region/:id"        : "createArea",
        "area/edit/:id"                 : "editArea",
        "area/delete/:id"               : "deleteArea",
        "area/:id"                      : "viewArea",
        // ---------------------------- :
        // regions                      :
        // ---------------------------- :
        "regions"                       : "showRegions",
        "region/edit/:id"               : "editRegion",
        "region/delete/:id"             : "deleteRegion",
        "region/create"                 : "createRegion",
        "region/:id"                    : "viewRegion",
        // ---------------------------- :
        // depot                        :
        // ---------------------------- :
        "depots"                        : "showDepots",
        "depots/region/:id"             : "showDepotsForRegion",
        "depot/edit/:id"                : "editDepot",
        "depot/delete/:id"              : "deleteDepot",
        "depot/create/region/:id"       : "createDepot",
        "depot/:id"                     : "viewDepot",
        // ---------------------------- :
        // driver                       :
        // ---------------------------- :
        "driver"                        : "manageDrivers",
        "driver/assign/vehicle/:id"     : "assignDriverToVehicle",
        // ---------------------------- :
        // fuel                         :
        // ---------------------------- :
        "fuel-management"               : "manageFuel",
        "fuel/manage/vehicle/:id"       : "showFuelLogForVehicle",
        // ---------------------------- :
        // maintenance                  :
        // ---------------------------- :
        "vehicle-maintenance"           : "manageVehicleMaintenance",
        "maintenance/vehicle/:id"       : "showMaintenanceForVehicle",
        // ---------------------------- :
        // maintenance-activity-type    :
        // ---------------------------- :
        "maintenance-types"             : "showMaintenanceActivityTypes",
        "maintenance-type/edit/:id"     : "editMaintenanceActivityType",
        "maintenance-type/delete/:id"   : "deleteMaintenanceActivityType",
        "maintenance-type/create"       : "createMaintenanceActivityType",
        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "customers"                     : "showCustomers",
        "customers/area/:id"            : "showCustomersForArea",
        "customer/edit/:id"             : "editCustomer",
        "customer/create"               : "createCustomer",
        "customer/:id"                  : "viewCustomer",
        // ---------------------------- :
        // contact                      :
        // ---------------------------- :
        "contact/customer/:id/create"   : "createCustomerContact",
        "contact/:id/edit"              : "editCustomerContact",
        "contact/:id/delete"            : "deleteCustomerContact",
        // ---------------------------- :
        // customer-activity            :
        // ---------------------------- :
        "activity/customer/:id"         : "showCustomerActivity",
        // ---------------------------- :
        // complaint                    :
        // ---------------------------- :
        "complaints"                    : "showComplaints",
        "complaints/customer/:id"       : "showComplaintsForCustomer",
        "complaint/:id"                 : "viewComplaint",
        "service-complaint/create/customer/:id" 
                                        : "createServiceComplaint",
        "quality-complaint/create/customer/:id" 
                                        : "createQualityComplaint",
        // ---------------------------- :
        // stock-damage                 :
        // ---------------------------- :
        "damage-types"                  : "showDamageTypes",
        "damage-type/edit/:id"          : "editDamageType",
        "damage-type/delete/:id"        : "deleteDamageType",
        "damage-type/create"            : "createDamageType",
        // ---------------------------- :
        // stock-activity               :
        // ---------------------------- :
        "stock-activity/depot/:id"      : "showStockActivityForDepot",
        // ---------------------------- :
        // stock                        :
        // ---------------------------- :
        "stock"                         : "manageStock",
        "stock/depot/:id"               : "showStockForDepot",
        // ---------------------------- :
        // vehicle                      :
        // ---------------------------- :
        "vehicles/depot/:id"            : "showVehiclesForDepot",
        "vehicles"                      : "showVehicles",
        "vehicle/edit/:id"              : "editVehicle",
        "vehicle/delete/:id"            : "deleteVehicle",
        "vehicle/create"                : "createVehicle",
        "vehicle/:id"                   : "viewVehicle",
        // ---------------------------- :
        // product-price-category       :
        // ---------------------------- :
        "price-categories"              : "showPriceCategories",
        "price-category/edit/:id"       : "editPriceCategory",
        "price-category/delete/:id"     : "deletePriceCategory",
        "price-category/create"         : "createPriceCategory",
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "products"                      : "showProducts",
        "products/deleted"              : "showDeletedProducts",
        "product/edit/:id"              : "editProduct",
        "product/create"                : "createProduct",
        "product/:id"                   : "viewProduct",
        // ---------------------------- :
        // weight-category              :
        // ---------------------------- :
        "weight-classes"                : "showWeightClasses",
        "weight-class/edit/:id"         : "editWeightClass",
        "weight-class/delete/:id"       : "deleteWeightClass",
        "weight-class/create"           : "createWeightClass",
        // ---------------------------- :
        // user                         :
        // ---------------------------- :
        "users"                         : "showUsers",
        "user/edit/:id"                 : "editUser",
        "user/delete/:id"               : "deleteUser",
        "user/create"                   : "createUser",
        "user/:id"                      : "viewUser",
        // ---------------------------- :
        // commission                   :
        // ---------------------------- :
        "commissions/edit"              : "editCommissionMatrix",
        // ---------------------------- :
        // system                       :
        // ---------------------------- :
        "system/activity"               : "showSystemActivityLog",
 
        // //////////////////////////// :
        // FIELD STAFF                  :
        // //////////////////////////// :

        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "!f/customers/all"              : "fieldstaff_showAllCustomers",
        "!f/customers"                  : "fieldstaff_showCustomers",
        "!f/customer/:id"               : "fieldstaff_viewCustomer",
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!f/orders"                     : "fieldstaff_showOrders",
        // ---------------------------- :
        // stock                        :
        // ---------------------------- :
        "!f/stock"                      : "fieldstaff_showStock",
 
        // ---------------------------- :
        // task                         :
        // ---------------------------- :
 
        // ---------------------------- :
        // performance                  :
        // ---------------------------- :
 
        // ---------------------------- :
        // user                         :
        // ---------------------------- :
 
        // //////////////////////////// :
        // DRIVER                       :
        // //////////////////////////// :

        //"!v/index"

        // //////////////////////////// :
        // CALL CENTER                  :
        // //////////////////////////// :

        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "!c/customers"                  : "callcenter_showCustomers",
        "!c/location/customer/:id"      : "callcenter_viewCustomerLocation",
        "!c/tasks/customer/:id"         : "callcenter_viewTasksForCustomer",
        "!c/orders/customer/:id"        : "callcenter_viewOrdersForCustomer",
        "!c/complaints/customer/:id"    : "callcenter_viewComplaintsForCustomer",
        "!c/activity/customer/:id"      : "callcenter_viewActivityForCustomer",
        "!c/contacts/customer/:id"      : "callcenter_viewContactsForCustomer",
        "!c/customer/:id"               : "callcenter_viewCustomer",
        "!c/activity"                   : "callcenter_registerActivity",
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!c/orders/date/:date"          : "callcenter_showOrdersForDate",
        "!c/orders"                     : "callcenter_showOrders",
        "!c/order/edit/:id"             : "callcenter_editOrder",
        "!c/order/delete/:id"           : "callcenter_deleteOrder",
        "!c/order/:id"                  : "callcenter_viewOrder",
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "!c/price-list"                 : "callcenter_showProducts",
        "!c/product/:id"                : "callcenter_viewProduct",
        // ---------------------------- :
        // sidebar                      :
        // ---------------------------- :
        "!c/sidebar/tasks"              : "callcenter_showTasks",
        "!c/sidebar/stock"              : "callcenter_showStockSummary",
        "!c/sidebar/calendar"           : "callcenter_showCalendar",
 
        // //////////////////////////// :
        // DEPOT MANAGEMENT             :
        // //////////////////////////// :

        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!d/queued"                     : "depot_showQueuedOrders",
        "!d/dispatched"                 : "depot_showDispatchedOrders",
        // ---------------------------- :
        // customer                     :
        // ---------------------------- :
        "!d/customer/:id"               : "depot_viewCustomer",
        // ---------------------------- :
        // vehicle                      :
        // ---------------------------- :
        "!d/vehicle/:id"                : "depot_viewVehicle",
        // ---------------------------- :
        // driver                       :
        // ---------------------------- :
        "!d/sidebar/drivers"            : "depot_showDrivers",
        // ---------------------------- :
        // stock                        :
        // ---------------------------- :
        "!d/sidebar/stock-summary"      : "depot_showStockSummary",
        "!d/sidebar/add-stock"          : "depot_addStock",
        "!d/sidebar/report-damages"     : "depot_reportStockDamages",
        "!d/sidebar/stock-adjustment"   : "depot_makeStockAdjustment",

        // //////////////////////////// :
        // ORDER QUEUEING               :
        // //////////////////////////// :

        // ---------------------------- :
        // dispatch                     :
        // ---------------------------- :
        "!q/dispatches"                 : "queueing_showDispatches",
        "!q/dispatch/:id"               : "queueing_viewDispatch",
        "!q/load/vehicle/:id"           : "queueing_load",

        // ---------------------------- :
        // vehicle                      :
        // ---------------------------- :
        "!q/vehicles"                   : "queueing_showVehicles",
        "!q/vehicle/:id"                : "queueing_viewVehicle",
  
        // ---------------------------- :
        // order                        :
        // ---------------------------- :
        "!q/order/:id"                  : "queueing_viewOrder",
 
        // ---------------------------- :
        // product                      :
        // ---------------------------- :
        "!q/product/:id"                : "queueing_viewProduct"
 
    },
    index: function() {

        $('#main').html('Welcome!');

    },
    error: function(e) {
        T.render('admin/error', function(t) {

            var message = 'Unknown error.';
            
            if (e) {
                var obj = e.responseJSON;
                if (obj && obj.message) {
                    message = obj.message;
                } else {
                    message = e.responseText;
                }
            }
    
            $('#main').html(t({message: message}));

        });
    },
    offline: function() {
        $('#main').html('offline');
    },
    notify: function(msg, type) {
        msg = type + ': ' + msg;
        $('#log').prepend('<tr><td>' + msg + ' </td><td><a href="javascript:" class="note-dismiss">Dismiss</a></td></tr>');
    },
    emptyCache: function() {
        store.clear();
        $('#main').html('Cache cleared!');
    },
    onRequestBegin: function() {
        $('#info').html('Loading...');
    },
    onRequestEnd: function() {
        $('#info').html('');
    },
    login: function() {
        T.render('admin/login', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);
 
            form.validate({
                rules: {
                    user     : "required",
                    password : "required"
                },
                submitHandler: function(form) {

                    var user  = form['user'].value,
                        pass  = form['password'].value,
                        token = $(document.body).data('key');
 
                    App.authenticate(user, CryptoJS.HmacSHA1(pass, token).toString());

                }
            });
 
        });
    },
    logout: function() {
        App.logout();
    },
    showQueue: function() {
        T.render('admin/queue', function(t) {

            var queue = Storage.queue.get();
            delete(queue.last);

            $('#main').html(t(_.isEmpty(queue) ? null : queue));

            $('a.queue-item-process').click(function() {
                Storage.queue.process($(this).data('id'), function() {
                    App.refresh();
                });
            });

            $('a.queue-item-remove').click(function() {
                Storage.queue.remove($(this).data('id'));
                App.refresh();
            });

            $('button.queue-process').click(function() {

                var i = 0, items = $('input[name="queue-item"]:checked');
                _.each(items, function(el) {
                    var index = $(el).data('id');
                    Storage.queue.process(index, function() {
                        if (++i === items.length) {
                            App.refresh();
                        }
                    });
                });

            });

        });
    },
    showUserProfile: function() {
        T.render('admin/user/view', function(t) {
            var user = App.user();

            user.role = Model.readableRoleName(user.role);

            $('#main').html(t(user)).append('<a href="#user/password">Update password</a>');
        });
    },
    updatePassword: function() {
        T.render('admin/user/password', function(t) {

            var user = App.user();

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "old"     : "required",
                    "new"     : {
                        required  : true,
                        minlength : 5
                    },
                    "confirm" : {
                        required  : true,
                        minlength : 5,
                        equalTo   : "#new"
                    }
                },
                submitHandler: function(form) {

                    var token = $(document.body).data('key'),
                        pass  = CryptoJS.HmacSHA1(form['old'].value, token), 
                        local = store.get('sdrp.db.user/' + user.username);

                    if (local) {
                        try {
                            var msg = CryptoJS.AES.decrypt(local, pass.toString()),
                                obj = JSON.parse(msg.toString(CryptoJS.enc.Utf8));

                            if (obj.username === user.username) {

                                var data = { 
                                    password : CryptoJS.HmacSHA1(form['new'].value, token).toString()
                                };
        
                                Storage.process({
                                    type        : 'PATCH',
                                    resource    : 'user/' + user.id + '/password',
                                    data        : data,
                                    description : 'Change the password for "' + user.username + '".',
                                    purge       : 'user/' + user.username,
                                    success: function() {
                                        // All cached data becomes invalid on password change!
                                        store.clear();
                                        App.notify('The password has been changed.');
                                    },
                                    complete: function() {
                                        window.location.hash = 'profile';
                                    }
                                });

                            } else {
                                throw "Authentication error.";
                            }
                            
                        } catch(e) {
                            App.notify('Invalid password.', 'error');
                        }
                    }

                }
            });

        });
    },
    showAreas: function() {
        T.render('admin/area/index', function(t) {
            Model.getAreas(function(areas) {
                $('#main').html(t({area: areas}));
            });
        });
    },
    viewArea: function(id) {
        T.render('admin/area/view', function(t) {
            Model.getArea(id, function(area) {
                $('#main').html(t(area));
            });
        });
    },
    showRegions: function() {
        T.render('admin/region/index', function(t) {
            Model.getRegions(function(regions) {
                $('#main').html(t({region: regions}));
            });
        });
    },
    editRegion: function(id) {
        T.render('admin/region/edit', function(t) {
            Model.getRegion(id, function(region) {

                var form = $('<form></form>').append(t(region));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name     : form['name'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'region/' + id,
                            data        : data,
                            description : 'Edit region "' + region.name + '".',
                            purge       : 'regions',
                            hint        : 'The region could not be updated: ', 
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A region with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'regions';
                            },
                            successMsg: 'Region "' + region.name + '" was successfully updated.'
                        });

                    }
                });

            });
        });
    },
    deleteRegion: function(id) {
        T.render('admin/region/delete', function(t) {

            Model.getRegion(id, function(region) {

                $('#main').html(t(region));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'region/' + id,
                        data        : '',
                        description : 'Delete region "' + region.name + '".',
                        purge       : 'regions',
                        hint        : 'Cannot delete region: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': 'Areas/depots still present in the region.'
                        },
                        complete: function() {
                            window.location.hash = 'regions';
                        },
                        successMsg: 'Region "' + region.name + '" was deleted.'
                    });

                });

            });

        });
    },
    createRegion: function() {
        T.render('admin/region/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name": "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name: form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'region',
                        data        : data,
                        description : 'Create a new region named "' + data.name + '".',
                        purge       : 'regions',
                        hint        : 'The region could not be created: ',
                        feedback    : {
                            'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A region with the name "' + data.name + '" already exists.'
                        },
                        complete: function() {
                            window.location.hash = 'regions';
                        },
                        successMsg: 'Region "' + data.name + '" was successfully created.'
                    });

                }
            });

        });
    },
    viewRegion: function(id) {
        T.render('admin/region/view', function(t) {
            Model.getRegion(id, function(region) {
                $('#main').html(t(region));
            });
        });
    },
    showDepots: function() {
        T.render('admin/depot/index', function(t) {
            Model.getDepots(function(depots) {
                $('#main').html(t({depot: depots}));
            });
        });
    },
    showDepotsForRegion: function(regionId) {
        T.render('admin/depot/index', function(t) {
            Model.getDepotsForRegion(regionId, function(depots) {
                $('#main').html(t({depot: depots}));
            });
        });
    },
    editDepot: function(id) {
        T.render('admin/depot/edit', function(t) {

            Storage.chain(Model.getUsersByRole('depot-manager'))
                   .chain(Model.getDepot(id))
                   .using(function(depotManagers, depot) {

                Model.getAreasForRegion(depot.regionId, function(areas) {

                    depot.manager = depotManagers;
                    depot.area    = areas;

                    var form = $('<form></form>').append(t(depot));

                    $('#main').html(form);

                    if (depot.depotManager) {
                        $('select[name="manager"]').val(depot.depotManager.id);
                    }

                    form.validate({
                        rules: {
                            "name"           : "required",
                            "latitude"       : "required",
                            "longitude"      : "required"
                        },
                        submitHandler: function(form) {

                            var areas = [];
                            _.each($('input[name="area"]:checked'), function(el) {
                                areas.push($(el).data('id'));
                            });

                            var data = {
                                name      : form['name'].value,
                                latitude  : form['latitude'].value, 
                                longitude : form['longitude'].value
                            };

                            var managerId = $('select[name="manager"]').val();
                            if (managerId) {
                                data.depotManagerId = managerId;
                            }

                            if (areas.length) {
                                data.areas = areas;
                            }

                            Storage.process({
                                type        : 'PUT',
                                resource    : '!depot/' + id,
                                data        : data,
                                description : 'Edit depot "' + depot.name + '".',
                                purge       : ['depots', 'areas', 'users'],
                                hint        : 'The depot could not be updated: ', 
                                complete: function() {
                                    window.location.hash = 'depots';
                                },
                                successMsg: 'Depot "' + data.name + '" was updated.'
                            });

                        }

                    });

                });

            });

        });
    },
    deleteDepot: function(id) {
        T.render('admin/depot/delete', function(t) {

            Model.getDepot(id, function(depot) {

                $('#main').html(t(depot));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!depot/' + id,
                        data        : '',
                        description : 'Delete depot "' + depot.name + '".',
                        purge       : ['depots', 'users'],
                        hint        : 'Cannot delete depot: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': 'This depot has <a href="#vehicles/depot/' + id + '">assigned vehicles</a>.'
                        },
                        complete: function() {
                            window.location.hash = 'depots';
                        },
                        successMsg: 'Depot "' + depot.name + '" was deleted.'
                    });

                });

            });

        });
    },
    createDepot: function(regionId) {
        T.render('admin/depot/create', function(t) {

            Storage.chain(Model.getUsersByRole('depot-manager'))
                   .chain(Model.getRegion(regionId))
                   .chain(Model.getAreasForRegion(regionId))
                   .using(function(depotManagers, region, areas) {

                var form = $('<form></form>').append(t({
                    manager : depotManagers,
                    region  : region,
                    area    : areas
                }));
 
                $('#main').html(form);
    
                form.validate({
                    rules: {
                        "name"           : "required",
                        "latitude"       : "required",
                        "longitude"      : "required"
                    },
                    submitHandler: function(form) {

                        var areas = [];
                        _.each($('input[name="area"]:checked'), function(el) {
                            areas.push($(el).data('id'));
                        });

                        var data = {
                            name           : form['name'].value,
                            latitude       : form['latitude'].value, 
                            longitude      : form['longitude'].value,
                            depotManagerId : $('select[name="manager"]').val(),
                            regionId       : regionId
                        };

                        if (areas.length) {
                            data.areas = areas;
                        }

                        Storage.process({
                            type        : 'POST',
                            resource    : '!depot',
                            data        : data,
                            description : 'Create depot "' + data.name + '".',
                            purge       : ['depots', 'areas'],
                            hint        : 'The depot could not be created: ', 
                            complete: function() {
                                window.location.hash = 'depots';
                            },
                            successMsg: 'New depot "' + data.name + '" was successfully created in ' + region.name + ' region.'
                        });

                    }
                });

            });

        });
    },
    viewDepot: function(id) {
        T.render('admin/depot/view', function(t) {
            Model.getDepot(id, function(depot) {
                Model.getAreasForDepot(id, function(areas) {

                    depot.area = areas;
                    $('#main').html(t(depot));

                });
            });
        });
    },
    manageDrivers: function() {
        T.render('admin/driver/index', function(t) {
            Model.getDrivers(function(drivers) {
                $('#main').html(t({driver: drivers}));
            });
        });
    },
    assignDriverToVehicle: function(vehicleId) {
        T.render('admin/vehicle/driver', function(t) {
            Model.getVehicle(vehicleId, function(vehicle) {
                Model.getDrivers(function(drivers) {

                    var form = $('<form></form>').append(t({
                        driver  : drivers,
                        vehicle : vehicle
                    }));
     
                    $('#main').html(form);

                    if (vehicle.driverId) {
                        $('select[name="driver"]').val(vehicle.driverId);
                    }
        
                    form.validate({
                        submitHandler: function(form) {

                            if (form['driver'].value) {

                                var data = {
                                    driverId  : form['driver'].value,
                                    vehicleId : vehicleId
                                };
    
                                Storage.process({
                                    type        : 'PATCH',
                                    resource    : 'vehicle/driver',
                                    data        : data,
                                    description : 'Assign a driver to vehicle ' + vehicle.regNo + '.',
                                    purge       : ['vehicles', 'drivers'],
                                    hint        : 'The driver could not be assigned to the vehicle: ', 
                                    complete: function() {
                                        window.location.hash = 'vehicles';
                                    }
                                });
    
                            } else {

                                Storage.process({
                                    type        : 'DELETE',
                                    resource    : 'vehicle/driver',
                                    data        : {vehicleId: vehicleId},
                                    description : 'Remove driver assignment for vehicle ' + vehicle.regNo + '.',
                                    purge       : ['vehicles', 'drivers'],
                                    hint        : 'The driver assignment could not be removed: ', 
                                    complete: function() {
                                        window.location.hash = 'vehicles';
                                    }
                                });
 
                            }
                        }
                    });

                });
            });
        });
    },
    manageFuel: function() {
        T.render('admin/fuel/vehicle-index', function(t) {
            Model.getVehicles(function(vehicles) {
 
                $('#main').html(t({vehicle: vehicles}));

            });
        });
    },
    showFuelLogForVehicle: function(vehicleId) {
        T.render('admin/fuel/vehicle', function(t) {
            Model.getVehicle(vehicleId, function(vehicle) {
 
                $('#main').html(t(vehicle));

            });
        });
    },
    manageVehicleMaintenance: function() {
        T.render('admin/maintenance/vehicle-index', function(t) {
            Model.getVehicles(function(vehicles) {
 
                $('#main').html(t({vehicle: vehicles}));

            });
        });
    },
    showMaintenanceForVehicle: function(vehicleId) {
        T.render('admin/maintenance/vehicle', function(t) {
            Model.getVehicle(vehicleId, function(vehicle) {
 
                $('#main').html(t(vehicle));

            });
        });
    },
    createArea: function(regionId) {
        T.render('admin/area/create', function(t) {

            Storage.chain(Model.getDepotsForRegion(regionId))
                   .chain(Model.getRegion(regionId))
                   .using(function(regionDepots, region) {

                var form = $('<form></form>').append(t({
                    depot      : regionDepots,
                    regionId   : regionId,
                    regionName : region.name
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name     : form['name'].value,
                            depotId  : form['depot'].value, 
                            regionId : regionId 
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'area',
                            data        : data,
                            description : 'Create a new area named "' + data.name + '".',
                            purge       : 'areas',
                            hint        : 'The area could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'An area with the name "' + data.name + '" already exists in ' + region.name + ' region.'
                            },
                            complete: function() {
                                window.location.hash = 'areas';
                            },
                            successMsg: 'The area "' + data.name + '" was successfully created.'
                        });

                    }
                });

            });

        });
    },
    editArea: function(id) {
        T.render('admin/area/edit', function(t) {
            T.render('admin/user/select', function(t_) {

                Storage.chain(Model.getArea(id))
                       .chain(Model.getUsersByRole('field-staff'))
                       .chain(Model.getUsersByRole('call-center'))
                       .chain(Model.getDepots)
                       .using(function(area, fieldstaff, callcenter, depots) {
    
                    // Inject region id into user collections
    
                    _.each(fieldstaff, function(staff) {
                        staff.regionId = depots.hasOwnProperty(staff.depotId) ? depots[staff.depotId].regionId : null;
                    });
    
                    _.each(callcenter, function(staff) {
                        staff.regionId = depots.hasOwnProperty(staff.depotId) ? depots[staff.depotId].regionId : null;
                    });
    
                    var filterByRegion = function(item) {
                        return item.regionId == area.regionId;
                    };
    
                    // All field staff in the region
                    var regionFieldstaff = _.filter(fieldstaff, filterByRegion);
                    // All call center users in the region
                    var regionCallcenter = _.filter(callcenter, filterByRegion);
    
                    area.depot = _.filter(depots, filterByRegion);
    
                    var form = $('<form></form>').append(t(area));
                    $('#main').html(form);
    
                    // ... //
    
                    var updateDropDown = function(sel, users, depotId) {
                        $(sel).html(t_({
                            user : _.filter(users, function(item) {
                                return item.depotId == depotId;
                            })
                        }));
                    };

                    updateDropDown('#area-edit-select-callcenter', regionCallcenter, area.depotId);
                    updateDropDown('#area-edit-select-fieldstaff', regionFieldstaff, area.depotId);
    
                    $('select[name="depot"]').change(function(a) {
                        var depotId = $(this).val();
                        updateDropDown('#area-edit-select-callcenter', regionCallcenter, depotId);
                        updateDropDown('#area-edit-select-fieldstaff', regionFieldstaff, depotId);
                     });

                    // ... //
    
                    var u = area.callcenterUser ? area.callcenterUser.id : '';
                    $('select[name="callcenter-user"]').val(u);
    
                    u = area.fieldstaffUser ? area.fieldstaffUser.id : '';
                    $('select[name="fieldstaff-user"]').val(u);
    
                    $('select[name="depot"]').val(area.depotId);
    
                    form.validate({
                        rules: {
                            "name": "required"
                        },
                        submitHandler: function(form) {
    
                            var data = {
                                name     : form['name'].value,
                                depotId  : form['depot'].value || null, 
                                regionId : area.regionId 
                            };
    
                            var user = form['callcenter-user'].value;
                            if (user) {
                                data.callcenterUser = user;
                            }
                            user = form['fieldstaff-user'].value;
                            if (user) {
                                data.fieldstaffUser = user;
                            }
    
                            Storage.process({
                                type        : 'PUT',
                                resource    : '!area/' + id,
                                data        : data,
                                description : 'Edit area "' + area.name + '".',
                                purge       : ['areas', 'users'],
                                hint        : 'The area could not be updated: ', 
                                feedback    : {
                                    'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'An area with the name "' + data.name + '" already exists in the same region.'
                                },
                                complete: function() {
                                    window.location.hash = 'areas';
                                },
                                successMsg: 'Area "' + area.name + '" was successfully updated.'
                            });
    
                        }
                    });
    
                });
    
            });
        });
    },
    deleteArea: function(id) {
        T.render('admin/area/delete', function(t) {

            Model.getArea(id, function(area) {

                $('#main').html(t(area));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : '!area/' + id,
                        data        : '',
                        description : 'Delete area "' + area.name + '".',
                        purge       : 'areas',
                        hint        : 'Cannot delete area: ',
                        feedback    : {
                            'SQL_FOREIGN_KEY_CONSTRAINT_VIOLATION': 'This area still has <a href="#customers/area/' + id + '">assigned customers</a>.'
                        },
                        complete: function() {
                            window.location.hash = 'areas';
                        },
                        successMsg: 'The area "' + area.name + '" was deleted.'
                    });

                });

            });

        });
    },
    showMaintenanceActivityTypes: function() {
        T.render('admin/maintenance-activity-type/index', function(t) {
            Model.getMaintenanceTypes(function(activityTypes) {
                $('#main').html(t({type: activityTypes}));
            });
        });
    },
    editMaintenanceActivityType: function(id) {

        $('#main').html('edit maintenance');

    },
    deleteMaintenanceActivityType: function(id) {

        $('#main').html('delete maintenance type');

    },
    createMaintenanceActivityType: function() {
        T.render('admin/maintenance-activity-type/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name": "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name     : form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'maintenance-activity-type',
                        data        : data,
                        description : 'Create a new vehicle maintenance activity type named "' + data.name + '".',
                        purge       : 'maintenance-activity-types',
                        hint        : 'The vehicle maintenance activity type could not be created: ',
                        complete: function() {
                            window.location.hash = 'maintenance-types';
                        }
                    });

                }
            });

        });
    },
    showCustomersForArea: function(areaId) {
        T.render('admin/customer/index', function(t) {
            
            Model.getCustomers(function(customers) {

                // Filter customers by area id
                var areaCustomers = _.filter(customers, function(item) {
                    return item.areaId == areaId;
                });

                $('#main').html(t({customer: areaCustomers}));

            });

        });
    },
    showCustomers: function() {
        T.render('admin/customer/index', function(t) {
            
            Model.getCustomers(function(customers) {
                $('#main').html(t({customer: customers}));
            });

        });
    },
    viewCustomer: function(id) {
        T.render('admin/customer/view', function(t) {

            Model.getCustomer(id, function(customer) {
                Model.getContactsForCustomer(id, function(contacts) {

                    customer.contact = contacts;
                    $('#main').html(t(customer));

                });
            });

        });
    },
    editCustomer: function(id) {
        T.render('admin/customer/edit', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .chain(Model.getCustomer(id))
                   .using(function(areas, priceCategories, customer) {

                customer.area = areas;
                customer.priceCat = priceCategories;

                var form = $('<form></form>').append(t(customer));
                $('#main').html(form);

                $('select[name="area"]').val(customer.areaId);
                $('select[name="price-category"]').val(customer.priceCatId);

                form.validate({
                    rules: {
                        "name"           : "required",
                        "address"        : "required",
                        "latitude"       : "required number",
                        "longitude"      : "required number",
                        "tin"            : "required",
                        "phone"          : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name          : form['name'].value,
                            latitude      : form['latitude'].value,
                            longitude     : form['longitude'].value,
                            tin           : form['tin'].value,
                            phone         : form['phone'].value,
                            address       : form['address'].value,
                            isActive      : form['is-active'].checked,
                            areaId        : form['area'].value,
                            priceCatId    : form['price-category'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'customer/' + id,
                            data        : data,
                            description : 'Update customer "' + data.name + '".',
                            purge       : 'customers',
                            complete: function() {
                                window.location.hash = 'customers';
                            },
                            successMsg: 'Customer "' + data.name + '" was successfully updated.'
                        });

                    }
                });

            });

        });
    },
    createCustomer: function() {
        T.render('admin/customer/create', function(t) {

            Storage.chain(Model.getAreas)
                   .chain(Model.getPriceCategories)
                   .using(function(areas, priceCategories) {
   
                var form = $('<form></form>').append(t({
                    priceCategory : priceCategories,
                    area          : areas
                }));

                $('#main').html(form);

                form.validate({
                    rules: {
                        "name"           : "required",
                        "address"        : "required",
                        "latitude"       : "required number",
                        "longitude"      : "required number",
                        "tin"            : "required",
                        "phone"          : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name          : form['name'].value,
                            latitude      : form['latitude'].value,
                            longitude     : form['longitude'].value,
                            tin           : form['tin'].value,
                            phone         : form['phone'].value,
                            address       : form['address'].value,
                            isActive      : form['is-active'].checked,
                            areaId        : form['area'].value,
                            priceCatId    : form['price-category'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'customer',
                            data        : data,
                            description : 'Create customer "' + data.name + '".',
                            purge       : 'customers',
                            hint        : 'The customer could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A customer with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'customers';
                            },
                            successMsg: 'Customer "' + data.name + '" was successfully created.'
                        });

                    }
                });

            });

        });
    },
    createCustomerContact: function(customerId) {
        T.render('admin/contact/create', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getCustomer(customerId))
                   .using(function(contactTypes, customer) {
    
                customer.contactType = contactTypes;

                var form = $('<form></form>').append(t(customer));
    
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "datum" : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            customerId  : customerId,
                            kind        : form['kind'].value,
                            datum       : form['datum'].value, 
                            meta        : form['meta'].value
                        };

                        Storage.process({
                            type        : 'POST',
                            resource    : 'contact',
                            data        : data,
                            description : 'Create a new customer contact for customer "' + customer.name + '".',
                            purge       : ['customers', 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be created: ',
                            complete: function() {
                                window.location.hash = 'customer/' + customerId;
                            },
                            successMsg: 'The customer contact information was added to customer "' + customer.name + '".'
                        });
                    }
                });
    
            });

        });
    },
    editCustomerContact: function(id) {
        T.render('admin/contact/edit', function(t) {

            Storage.chain(Model.getContactTypes)
                   .chain(Model.getContact(id))
                   .using(function(contactTypes, contact) {

                var customerId = contact.customerId;

                contact.contactType = contactTypes;

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "kind"  : "required",
                        "body"  : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            customerId : customerId,
                            kind       : form['kind'].value,
                            datum      : form['datum'].value, 
                            meta       : form['meta'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'contact/' + id,
                            data        : data,
                            description : 'Edit customer contact for customer "' + contact.customerName + '".',
                            purge       : ['contact-' + id, 'contacts-customer-' + customerId],
                            hint        : 'The customer contact could not be updated: ',
                            complete: function() {
                                window.location.hash = 'customer/' + customerId;
                            },
                            successMsg: 'The customer contact information was updated for customer "' + contact.customerName + '".'
                        });

                    }
                });

            });

        });
    },
    deleteCustomerContact: function(id) {
        T.render('admin/contact/delete', function(t) {
            Model.getContact(id, function(contact) {

                var form = $('<form></form>').append(t(contact));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'contact/' + id,
                        data        : '',
                        description : 'Delete contact for customer "' + contact.customerName + '".',
                        purge       : ['contacts-customer-' + contact.customerId, 'contact-' + id],
                        hint        : 'Cannot delete contact: ',
                        complete: function() {
                            window.location.hash = 'customer/' + contact.customerId;
                        },
                        successMsg: 'The customer contact information was deleted.'
                    });
                });

            });
        });
    },
    showCustomerActivity: function(customerId) {

        $('#main').html('show customer activity');

    },
    showComplaints: function() {
        T.render('admin/complaint/index', function(t) {
            Model.getComplaints(function(complaints) {
                $('#main').html(t({complaint: complaints}));
            });
        });
    },
    showComplaintsForCustomer: function(customerId) {
        T.render('admin/complaint/customer', function(t) {
            Model.getCustomer(customerId, function(customer) {
                Model.getComplaints(function(complaints) {
    
                    var customerComplaints = _.filter(complaints, function(item) {
                        return item.customerId == customerId;
                    });

                    $('#main').html(t({
                        customer  : customer, 
                        complaint : customerComplaints
                    }));
    
                });
            });
        });
    },
    viewComplaint: function(id) {
        T.render('admin/complaint/view', function(t) {
            Model.getComplaint(id, function(complaint) {
                $('#main').html(t(complaint));

                $('button.resolve').click(function() {

                    Storage.process({
                        type        : 'PATCH',
                        resource    : 'complaint/resolve/' + id,
                        data        : '',
                        description : 'Resolve complaint from customer "' + complaint.customer + '".',
                        purge       : 'complaints',
                        complete: function() {
                            App.refresh();
                        }
                    });

                });

            });
        });
    },
    createServiceComplaint: function(customerId) {

        $('#main').html('create service complaint');

    },
    createQualityComplaint: function(customerId) {

        $('#main').html('create quality complaint');

    },
    showDamageTypes: function() {
        T.render('admin/stock-damage-type/index', function(t) {
            Model.getDamageTypes(function(damageTypes) {
                $('#main').html(t({item: damageTypes}));
            });
        });
    },
    editDamageType: function(id) {
        T.render('admin/stock-damage-type/edit', function(t) {
            Model.getDamageType(id, function(damageType) {

                var form = $('<form></form>').append(t(damageType));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name"  : "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name : form['name'].value
                        };

                        Storage.process({
                            type        : 'PUT',
                            resource    : 'stock-damage-type/' + id,
                            data        : data,
                            description : 'Edit stock damage type: "' + data.name + '".',
                            purge       : 'stock-damage-types',
                            hint        : 'The stock damage type could not be updated: ',
                            complete: function() {
                                window.location.hash = 'damage-types';
                            },
                            successMsg: 'Stock damage type "' + data.name + '" was updated.'
                        });

                    }
                });

            });
        });
    },
    deleteDamageType: function(id) {
        T.render('admin/stock-damage-type/delete', function(t) {
            Model.getDamageType(id, function(damageType) {

                var form = $('<form></form>').append(t(damageType));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'stock-damage-type/' + id,
                        data        : '',
                        description : 'Delete stock damage type "' + damageType.name + '".',
                        purge       : 'stock-damage-types',
                        hint        : 'Cannot delete damage type: ',
                        complete: function() {
                            window.location.hash = 'damage-types';
                        },
                        successMsg: 'Stock damage type "' + damageType.name + '" was deleted.'
                    });
                });

            });
        });
    },
    createDamageType: function() {
        T.render('admin/stock-damage-type/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name"  : "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name : form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'stock-damage-type',
                        data        : data,
                        description : 'Create stock damage type: "' + data.name + '".',
                        purge       : 'stock-damage-types',
                        hint        : 'The stock damage type could not be created: ',
                        complete: function() {
                            window.location.hash = 'damage-types';
                        },
                        successMsg: 'Stock damage type "' + data.name + '" was added.'
                    });

                }
            });

        });
    },
    showStockActivityForDepot: function(depotId) {
        T.render('admin/stock/depots', function(t) {
            Storage.load('stock-activity/depot/' + depotId, 'depot-' + depotId + '-stock-activity', function(activity) {

                $('#main').html(t({activity: activity}));

            });
        });
    },
    manageStock: function() {
        T.render('admin/stock/depots', function(t) {
            Model.getDepots(function(depots) {
                $('#main').html(t({depot: depots}));
            });
        });
    },
    showStockForDepot: function(depotId) {
        T.render('admin/stock/summary', function(t) {
            Model.getStockForDepot(depotId, function(stock) {

                $('#main').html(t({
                    depotId  : depotId, 
                    item     : stock
                }));

            });
        });
    },
    showVehiclesForDepot: function(depotId) {
        T.render('admin/vehicle/index', function(t) {
            Model.getVehicles(function(vehicles) {

                var depotVehicles = _.filter(vehicles, function(item) {
                    return item.depotId == depotId;
                });

                $('#main').html(t({vehicle: depotVehicles}));

            });
        });
    },
    showVehicles: function() {
        T.render('admin/vehicle/index', function(t) {
            Model.getVehicles(function(vehicles) {
                $('#main').html(t({vehicle: vehicles}));
            });
        });
    },
    editVehicle: function(id) {
        T.render('admin/vehicle/edit', function(t) {

            Storage.chain(Model.getVehicle(id))
                   .chain(Model.getDepots)
                   .chain(Model.getWeightClasses)
                   .using(function(vehicle, depots, weightClasses) {

                vehicle.weightClass = weightClasses;
                vehicle.depot       = depots;

                var form = $('<form></form>').append(t(vehicle));

                $('#main').html(form);
    
                $('select[name="weight-class"]').val(vehicle.weightCatId);
                $('select[name="depot"]').val(vehicle.depotId);

                if ('active' === vehicle.status) {
                    $('input[name="active"]').attr('checked', 'checked');
                }
 
                form.validate({
                    rules: {
                        "reg-no" : "required",
                        "make"   : "required",
                        "model"  : "required"
                    },
                    submitHandler: function(form) {
    
                        var data = {
                            'regNo'       : form['reg-no'].value,
                            'make'        : form['make'].value,
                            'model'       : form['model'].value,
                            'categoryId'  : form['weight-class'].value,
                            'depotId'     : form['depot'].value,
                            'status'      : $('input[name="active"]:checked').val() ? 'active' : 'inactive',
                            'isAvailable' : vehicle.isAvailable,
                            'userId'      : vehicle.userId || null
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'vehicle/' + id,
                            data        : data,
                            description : 'Update vehicle: "' + data.regNo + '".',
                            purge       : 'vehicles',
                            hint        : 'The vehicle could not be updated: ',
                            complete: function() {
                                window.location.hash = 'vehicles';
                            },
                            successMsg: 'Vehicle "' + data.regNo + '" was updated.'
                        });
        
                    }
                });
            });
        });
    },
    deleteVehicle: function(id) {
        T.render('admin/vehicle/delete', function(t) {

            Model.getVehicle(id, function(vehicle) {

                $('#main').html(t(vehicle));

                $('button.confirm').click(function() {

                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'vehicle/' + id,
                        data        : '',
                        description : 'Delete vehicle "' + vehicle.regNo + '".',
                        purge       : 'vehicles',
                        hint        : 'Cannot delete vehicle: ',
                        complete: function() {
                            window.location.hash = 'vehicles';
                        },
                        successMsg: 'Vehicle "' + vehicle.regNo + '" was removed from the system.'
                    });

                });

            });

        });
    },
    createVehicle: function() {
        T.render('admin/vehicle/create', function(t) {
            Model.getDepots(function(depots) {
                Model.getWeightClasses(function(weightClasses) {

                    var form = $('<form></form>').append(t({
                        weightClass : weightClasses,
                        depot       : depots
                    }));

                    $('#main').html(form);
        
                    form.validate({
                        rules: {
                            "reg-no" : "required",
                            "make"   : "required",
                            "model"  : "required"
                        },
                        submitHandler: function(form) {

                            var data = {
                                'regNo'       : form['reg-no'].value,
                                'make'        : form['make'].value,
                                'model'       : form['model'].value,
                                'categoryId'  : form['weight-class'].value,
                                'depotId'     : form['depot'].value,
                                'status'      : $('input[name="active"]:checked').val() ? 'active' : 'inactive',
                                'isAvailable' : true,
                                'userId'      : null
                            };
        
                            Storage.process({
                                type        : 'POST',
                                resource    : 'vehicle',
                                data        : data,
                                description : 'Create vehicle: "' + data.regNo + '".',
                                purge       : 'vehicles',
                                hint        : 'The vehicle could not be created: ',
                                complete: function() {
                                    window.location.hash = 'vehicles';
                                },
                                successMsg: 'Vehicle "' + data.regNo + '" was successfully created.'
                            });
        
                        }
                    });

                });
            });
        });
    },
    viewVehicle: function(id) {
        T.render('admin/vehicle/view', function(t) {
            Model.getVehicle(id, function(vehicle) {

                $('#main').html(t(vehicle));

            });
        });
    },
    showPriceCategories: function() {
        T.render('admin/price-category/index', function(t) {
            Model.getPriceCategories(function(priceCategories) {
                $('#main').html(t({category: priceCategories}));
            });
        });
    },
    editPriceCategory: function(id) {
        T.render('admin/price-category/edit', function(t) {
            Model.getPriceCategory(id, function(priceCategory) {

                var form = $('<form></form>').append(t(priceCategory));
                $('#main').html(form);

                form.validate({
                    rules: {
                        "name": "required"
                    },
                    submitHandler: function(form) {

                        var data = {
                            name: form['name'].value
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'price-category/' + id,
                            data        : data,
                            description : 'Update product price category "' + priceCategory.name + '".',
                            purge       : 'price-categories',
                            hint        : 'The product price category could not be updated: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A category with the name "' + data.name + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'price-categories';
                            }
                        });
    
                    }
                });

            });
        });
    },
    deletePriceCategory: function(id) {
        T.render('admin/price-category/delete', function(t) {
            Model.getPriceCategory(id, function(priceCategory) {

                var form = $('<form></form>').append(t(priceCategory));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'price-category/' + id,
                        data        : '',
                        description : 'Delete product price category "' + priceCategory.name + '".',
                        purge       : 'price-categories',
                        hint        : 'Cannot delete price category: ',
                        complete: function() {
                            window.location.hash = 'price-categories';
                        },
                        successMsg: 'The product price category was deleted.'
                    });
                });

            });
        });
    },
    createPriceCategory: function() {
        T.render('admin/price-category/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name": "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name: form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'price-category',
                        data        : data,
                        description : 'Create a new product price category named "' + data.name + '".',
                        purge       : 'price-categories',
                        hint        : 'The product price category could not be created: ',
                        feedback    : {
                            'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A category with the name "' + data.name + '" already exists.'
                        },
                        complete: function() {
                            window.location.hash = 'price-categories';
                        }
                    });

                }
            });

        });
    },
    showProducts: function() {
        T.render('admin/product/index', function(t) {

            Storage.chain(Model.getPriceCategories)
                   .chain(Model.getActiveProducts)
                   .using(function(priceCategories, products) {

                $('#main').html(t({
                    product  : products,
                    category : priceCategories
                }));

            });

        });
    },
    showDeletedProducts: function() {
        T.render('admin/product/deleted', function(t) {
            Model.getDeletedProducts(function(products) {
                $('#main').html(t({product: products}));
            });
        });
    },
    editProduct: function(id) {

        $('#main').html('edit product');

    },
    createProduct: function() {

        $('#main').html('create product');

    },
    viewProduct: function(id) {
        T.render('admin/product/view', function(t) {
            Model.getProduct(id, function(product) {
                $('#main').html(t(product));
            });
        });
    },
    showWeightClasses: function() {
        T.render('admin/weight-category/index', function(t) {
            Model.getWeightClasses(function(weightClasses) {
                $('#main').html(t({category: weightClasses}));
            });
        });
    },
    editWeightClass: function(id) {
        T.render('admin/weight-category/edit', function(t) {
            Model.getWeightClass(id, function(weightClass) {

                var form = $('<form></form>').append(t(weightClass));
                $('#main').html(form);
    
                form.validate({
                    rules: {
                        "name"  : "required"
                    },
                    submitHandler: function(form) {
    
                        var data = {
                            name : form['name'].value
                        };
    
                        Storage.process({
                            type        : 'PUT',
                            resource    : 'weight-category/' + id,
                            data        : data,
                            description : 'Update vehicle weight category: "' + data.name + '".',
                            purge       : 'weight-categories',
                            hint        : 'The vehicle weight category could not be updated: ',
                            complete: function() {
                                window.location.hash = 'weight-classes';
                            },
                            successMsg: 'Vehicle weight category "' + data.name + '" was updated.'
                        });
    
                    }
                });

            });
        });
    },
    deleteWeightClass: function(id) {
        T.render('admin/weight-category/delete', function(t) {
            Model.getWeightClass(id, function(weightClass) {

                var form = $('<form></form>').append(t(weightClass));
                $('#main').html(form);

                $('button.confirm').click(function() {
                    Storage.process({
                        type        : 'DELETE',
                        resource    : 'weight-category/' + id,
                        data        : '',
                        description : 'Delete vehicle weight category "' + weightClass.name + '".',
                        purge       : 'weight-categories',
                        hint        : 'Cannot delete vehicle weight category: ',
                        complete: function() {
                            window.location.hash = 'weight-classes';
                        },
                        successMsg: 'The vehicle weight category was deleted.'
                    });
                });

            });
        });
    },
    createWeightClass: function() {
        T.render('admin/weight-category/create', function(t) {

            var form = $('<form></form>').append(t());
            $('#main').html(form);

            form.validate({
                rules: {
                    "name"  : "required"
                },
                submitHandler: function(form) {

                    var data = {
                        name : form['name'].value
                    };

                    Storage.process({
                        type        : 'POST',
                        resource    : 'weight-category',
                        data        : data,
                        description : 'Create vehicle weight category: "' + data.name + '".',
                        purge       : 'weight-categories',
                        hint        : 'The vehicle weight category could not be created: ',
                        complete: function() {
                            window.location.hash = 'weight-classes';
                        },
                        successMsg: 'Vehicle weight category "' + data.name + '" was added.'
                    });

                }
            });

        });
    },
    showUsers: function() {
        T.render('admin/user/index', function(t) {
            Model.getUsers(function(users) {

                var users_ = jQuery.extend(true, {}, users);
                _.each(users_, function(user) {
                    user.role = Model.readableRoleName(user.role);
                });

                $('#main').html(t({user: users_}));

            });
        });
    },
    editUser: function(id) {
        T.render('admin/user/edit', function(t) {
            Model.getUser(id, function(user) {
                Model.getDepots(function(depots) {

                    user.depot = depots;

                    var form = $('<form></form>').append(t(user));
                    $('#main').html(form);

                    if (user.depotId) {
                        $('select[name="depot"]').val(user.depotId);
                    }
 
                    form.validate({
                        rules: {
                            "name"  : "required",
                            "depot" : "required"
                        },
                        submitHandler: function(form) {
        
                            var data = {
                                name    : form['name'].value,
                                depotId : form['depot'].value
                            };
        
                            Storage.process({
                                type        : 'PUT',
                                resource    : 'user/' + id,
                                data        : data,
                                description : 'Update user: "' + user.username + '".',
                                purge       : ['users', 'depots'],
                                hint        : 'The user could not be updated: ',
                                complete: function() {
                                    window.location.hash = 'users';
                                },
                                successMsg: 'The user "' + user.username + '" was updated.'
                            });
        
                        }
                    });

                });
            });
        });
    },
    deleteUser: function(id) {
        T.render('admin/user/delete', function(t) {
            Model.getUser(id, function(user) {

                $('#main').html(t(user));

                if (user.id != 1) {
                    $('button.confirm').click(function() {
    
                        Storage.process({
                            type        : 'DELETE',
                            resource    : 'user/' + id,
                            data        : '',
                            description : 'Delete user "' + user.username + '".',
                            purge       : 'users',
                            hint        : 'Cannot delete user: ',
                            complete: function() {
                                window.location.hash = 'users';
                            },
                            successMsg: function() {
                                App.notify('User "' + user.username + '" was deleted.', 'important');
                            }
                        });
    
                    });
                }

            });
        });
    },
    createUser: function() {
        T.render('admin/user/create', function(t) {
            Model.getDepots(function(depots) {

                var roles = {
                    'field-staff'   : 'Field Staff',
                    'call-center'   : 'Call Center',
                    'driver'        : 'Driver',
                    'admin'         : 'Administrator',
                    'depot-manager' : 'Depot Manager'
                };

                var form = $('<form></form>').append(t({
                    role  : roles, 
                    depot : depots
                }));

                $('#main').html(form);

                $('select[name="role"]').change(function() {
                    var div = $('#user-create-depot-select');
                    if ($(this).val() === 'admin') {
                        div.hide();
                    } else {
                        div.show();
                    }
                });

                form.validate({
                    rules: {
                        "name"     : "required",
                        "username" : "required",
                        "password" : {
                            required  : true,
                            minlength : 5
                        },
                        "confirm"  : {
                            required  : true,
                            minlength : 5,
                            equalTo   : "#password"
                        },
                        "depot"    : "required"
                    },
                    submitHandler: function(form) {
    
                        var key  = $(document.body).data('key'),
                            pass = CryptoJS.HmacSHA1(form['password'].value, key).toString();

                        var data = {
                            name     : form['name'].value,
                            role     : form['role'].value,
                            username : form['username'].value,
                            password : pass
                        };

                        data.depotId = data.role == 'admin' ? null : form['depot'].value;
    
                        Storage.process({
                            type        : 'POST',
                            resource    : 'user',
                            data        : data,
                            description : 'Create new user: "' + data.username + '".',
                            purge       : ['users', 'depots'],
                            hint        : 'The user could not be created: ',
                            feedback    : {
                                'SQL_UNIQUE_CONSTRAINT_VIOLATION': 'A user with the username "' + data.username + '" already exists.'
                            },
                            complete: function() {
                                window.location.hash = 'users';
                            },
                            successMsg: 'User "' + data.username + '" was created.'
                        });
    
                    }
                });

            });
        });
    },
    viewUser: function(id) {
        T.render('admin/user/view', function(t) {
            Model.getUser(id, function(user) {
                user.role = Model.readableRoleName(user.role);
                $('#main').html(t(user));
            });
        });
    },
    editCommissionMatrix: function() {

        $('#main').html('edit commission');

    },
    showSystemActivityLog: function() {

        $('#main').html('show system activity log');

    },
    fieldstaff_showAllCustomers: function() {
        T.render('fieldstaff/customer/index', function(t) {
            Model.getCustomers(function(customers) {
                $('#main').html(t({customer: customers})); 
            });
        });
    },
    fieldstaff_showCustomers: function() {
        T.render('fieldstaff/customer/index', function(t) {

            Model.getAreaForFieldstaffUser(function(areaId) {
                Model.getCustomers(function(customers) {
    
                    var areaCustomers = _.filter(customers, function(item) {
                        return item.areaId === areaId;
                    });
    
                    $('#main').html(t({customer: areaCustomers}));
    
                });
            });

        });
    },
    fieldstaff_viewCustomer: function(id) {
        T.render('fieldstaff/customer/view', function(t) {
            Model.getCustomer(id, function(customer) {
                $('#main').html(t(customer));
            });
        });
    },
    fieldstaff_showOrders: function() {
        T.render('fieldstaff/order/index', function(t) {

            Model.getAreaForFieldstaffUser(function(areaId) {
                Model.getOrders(function(orders) {

                    var areaOrders = _.filter(orders, function(item) {
                        return item.customerAreaId == areaId;
                    });

                    $('#main').html(t({order: areaOrders}));

                });
            });

        });
    },
    fieldstaff_showStock: function() {
        T.render('fieldstaff/stock/index', function(t) {
            Model.getDepotForFieldstaffUser(function(depotId) {
                Model.getDepot(depotId, function(depot) {

                    Storage.load('stock/depot/' + depotId, 'depot-' + depotId + '-stock', function(stock) {
    
                        $('#main').html(t({
                            depot  : depot, 
                            item   : stock
                        }));
    
                    });

                });
            });
        });
    },
    callcenter_showCustomers: function() {
        T.render('callcenter/customer/index', function(t) {
            
            Model.getCustomers(function(customers) {
                Model.getAreaForCallcenterUser(function(areaId) {

                    // Filter customers by area id
                    var areaCustomers = _.filter(customers, function(item) {
                        return item.areaId == areaId;
                    });

                    $('#main').html(t({customer: areaCustomers}));

                });
            });

        });
    },
    callcenter_viewCustomerLocation: function(customerId) {

        $('#main').html('cs: view customer location');

    },
    callcenter_viewTasksForCustomer: function(customerId) {

        $('#main').html('cs: view tasks for customer');

    },
    callcenter_viewOrdersForCustomer: function(customerId) {

        $('#main').html('cs: view orders for customer');

    },
    callcenter_viewComplaintsForCustomer: function(customerId) {

        $('#main').html('cs: view complaints for customer');

    },
    callcenter_viewActivityForCustomer: function(customerId) {

        $('#main').html('cs: view activity for customer');

    },
    callcenter_viewContactsForCustomer: function(customerId) {

        $('#main').html('cs: view contacts for customer');

    },
    callcenter_viewCustomer: function(id) {

        $('#main').html('cs: view customer');

    },
    callcenter_registerActivity: function() {

        $('#main').html('cs: register activity');

    },
    callcenter_showOrdersForDate: function() {

        $('#main').html('cs: show orders for date');

    },
    callcenter_showOrders: function() {

        $('#main').html('cs: show orders ');

    },
    callcenter_editOrder: function(id) {

        $('#main').html('cs: edit order');

    },
    callcenter_deleteOrder: function(id) {

        $('#main').html('cs: delete order');

    },
    callcenter_viewOrder: function(id) {

        $('#main').html('cs: view order');

    },
    callcenter_showProducts: function() {

        $('#main').html('cs: show products');

    },
    callcenter_viewProduct: function(id) {

        $('#main').html('cs: view product');

    },
    callcenter_showTasks: function() {

        $('#main').html('cs: show tasks');

    },
    callcenter_showStockSummary: function() {

        $('#main').html('cs: show stock summary');

    },
    callcenter_showCalendar: function() {

        $('#main').html('cs: show calendar');

    },
    depot_showQueuedOrders: function() {
        T.render('depot/order/index', function(t) {
            Model.getOrdersWithStatus('queued', function(orders) {

                $('#main').html(t({order: orders}));

            });
        });
    },
    depot_showDispatchedOrders: function() {
        T.render('depot/order/index', function(t) {
            Model.getOrdersWithStatus('dispatched', function(orders) {

                $('#main').html(t({order: orders}));

            });
        });
    },
    depot_viewCustomer: function(id) {

        $('#main').html('depot: show customer');

    },
    depot_viewVehicle: function(id) {
        T.render('depot/vehicle/view', function(t) {
            Model.getVehicle(id, function(vehicle) {

                $('#main').html(t(vehicle));

            });
        });
    },
    depot_showDrivers: function() {
        T.render('depot/driver/index', function(t) {
            Model.getDrivers(function(drivers) {

                $('#main').html(t({driver: drivers}));

            });
        });
    },
    depot_showStockSummary: function() {

        $('#main').html('depot: show stock summary');

    },
    depot_addStock: function() {

        $('#main').html('depot: add stock');

    },
    depot_reportStockDamages: function() {

        $('#main').html('depot: report damages');

    },
    depot_makeStockAdjustment: function() {

        $('#main').html('depot: make adjustment');

    },
    queueing_showDispatches: function() {

        $('#main').html('queueing: show dispatches');

    },
    queueing_showVehicles: function() {

        $('#main').html('queueing: show vehicles');

    },
    queueing_viewVehicle: function(id) {

        $('#main').html('queueing: view vehicle');

    },
    queueing_viewDispatch: function(id) {

        $('#main').html('queueing: view dispatch');

    },
    queueing_load: function(vehicleId) {

        $('#main').html('queueing: load');
        
    },
    queueing_viewVehicle: function(id) {

        $('#main').html('queueing: view vehicle');

    },
    queueing_viewOrder: function(id) {

        $('#main').html('queueing: view order');

    },
    queueing_viewProduct: function(id) {

        $('#main').html('queueing: view product');

    }
});

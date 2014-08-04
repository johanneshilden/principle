module Paths_trombone (
    version,
    getBinDir, getLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
catchIO = Exception.catch


version :: Version
version = Version {versionBranch = [0,1,0,0], versionTags = []}
bindir, libdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/johannes/Haskell/trombone2/.cabal-sandbox/bin"
libdir     = "/home/johannes/Haskell/trombone2/.cabal-sandbox/lib/x86_64-linux-ghc-7.4.1/trombone-0.1.0.0"
datadir    = "/home/johannes/Haskell/trombone2/.cabal-sandbox/share/x86_64-linux-ghc-7.4.1/trombone-0.1.0.0"
libexecdir = "/home/johannes/Haskell/trombone2/.cabal-sandbox/libexec"
sysconfdir = "/home/johannes/Haskell/trombone2/.cabal-sandbox/etc"

getBinDir, getLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "trombone_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "trombone_libdir") (\_ -> return libdir)
getDataDir = catchIO (getEnv "trombone_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "trombone_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "trombone_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)

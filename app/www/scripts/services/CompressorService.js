angular.module('angular-mobile-docs').
    factory('Compressor', function () {
        // TODO: Add some other compression algos
        var compressor = {
            compress : LZString.compress,
            decompress: LZString.decompress
        }
        return compressor;
    });
angular.module('angular-mobile-docs').
    factory('LocalStorageCache', function ($cacheFactory, Compressor) {
        var cache = $cacheFactory('LocalStorageCache', {});
        cache.get = function (key) {
            var item = localStorage.getItem(key);
            if (!item) return; // Cache miss
            item = JSON.parse(Compressor.decompress(item));
            return item.data; // Cache hit
        };
        cache.put = function (key, value) {
            if (typeof value.then === 'function') {
                value.then(function (value) {
                    localStorage.setItem(key, Compressor.compress(JSON.stringify(value)));
                });
            } else {
                localStorage.setItem(key, Compressor.compress(JSON.stringify(value)));
            }
        };
        cache.remove = function (key) {
            localStorage.removeItem(key);
        };
        cache.removeAll = function () {
            localStorage.clear();
        };
        return cache;
    });
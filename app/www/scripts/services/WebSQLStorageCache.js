// Based on http://docs.phonegap.com/en/3.0.0/cordova_storage_storage.md.html
angular.module('angular-mobile-docs').
    factory('WebSQLStorageCache', function ($window, $q, $cacheFactory) {
        // Init Angular Storage
        var cache = $cacheFactory('LocalStorageCache', {});

        var DATABSENAME = "HTTPCache";
        var sqlStorage = $window.openDatabase(
            "angularjs-mobile-docs",
            "0.0.1",
            "AngularJS.de Mobile Docs",
            3000000 // ~3MB
        );


        var initDB = function (transaction) {
            var sql = 'CREATE TABLE IF NOT EXISTS ' + DATABSENAME + ' (key unique, value)';
            console.log(sql);
            transaction.executeSql(sql);
        }


        // Transaction error callback
        //
        var generalErrorCB = function (transaction, err) {
            console.log("ERROR", err);
        }


        cache.get = function (key) {
            var deferred = $q.defer();


            var querySuccess = function (transaction, results) {
                // this will be empty since no rows were inserted.
                //console.log("Insert ID = " + results.insertId);
                // this will be 0 since it is a select statement
                //console.log("Rows Affected = " + results.rowAffected);
                // the number of rows returned by the select statement
                console.log("Result GET " + results.rows.length);

                if (results.rows.length === 1) {
                    deferred.resolve(results.rows.item(0)); // Hit
                }
                else if (results.rows.length === 0) {
                    deferred.resolve(undefined); // No Hit
                }
                else {
                    deferred.reject(results); // Error - to many hits
                }

            }

            var queryResult = function (transaction) {
                initDB(transaction);
                var sql = 'SELECT * FROM ' + DATABSENAME
                    + ' WHERE key="' + key + '"';
                console.log(sql);
                transaction.executeSql(sql, [], querySuccess, generalErrorCB);
            }


            sqlStorage.transaction(queryResult, generalErrorCB);
            // Query Result

            return deferred.promise;
        };
        cache.put = function (key, value) {
            var putData = function (transaction) {
                initDB(transaction);
                var sql = 'INSERT INTO ' + DATABSENAME + ' (key, value) ' +
                    'VALUES ("' + key + '", "' + JSON.stringify(value) + '")';

                console.log(sql);
                transaction.executeSql(sql);
            }
            sqlStorage.transaction(putData, generalErrorCB);
        };
        cache.remove = function (key) {
            var removeDataByKey = function (transaction) {
                initDB(transaction);
                transaction.executeSql('REMOVE FROM ' + DATABSENAME +
                    ' WHERE key= "' + key + '"');
            }
            sqlStorage.transaction(removeDataByKey, generalErrorCB);
        };
        cache.removeAll = function () {
            var removeDataByKey = function (transaction) {
                transaction.executeSql('REMOVE FROM ' + DATABSENAME);
            }
            sqlStorage.transaction(removeDataByKey, generalErrorCB);
        };
        return cache;
    });
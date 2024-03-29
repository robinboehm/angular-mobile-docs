"use strict";

angular.module("angular-mobile-docs")
    .factory("FetchService", function ($http, $q, LocalStorageCache, baseUrl) {

        var getVersionList = function () {
            /*
             TODO: LocalStorage for already downloaded files.
             But also should fetch if net is available
              */
            return $http.get(
                baseUrl
                    + "versions/"
                    + "index.json"
                , {cache: true}//{cache: LocalStorageCache}
            );
        }

        var getFileList = function (version) {
            return $http.get(
                baseUrl
                    + "versions/"
                    + version
                    + ".api.json"
                , {cache: (localStorage)?LocalStorageCache:true}
            );
        }

        var getPartial = function (version, name) {
            return $http.get(
                baseUrl
                    + "code/"
                    + version
                    + "/docs/partials/api/" + name
                , {cache: (localStorage)?LocalStorageCache:true});
        }

        var getAllPartials = function (version) {
            var promises = [];
            var promise = $q.all(promises);


            getFileList(version)
                .then(function (fileNameList) {
                    console.log(fileNameList);
                    var i = 0;
                    angular.forEach(fileNameList.data, function (fileName) {
                        promise.notify(++i,fileNameList.data.length);
                        promises.push(getPartial(version, fileName));
                    })
                });

            return promise;
        }

        return {
            getVersionList: function () {
                return getVersionList();
            },
            getFileList   : function (version) {
                return getFileList(version);
            },
            getPartial    : function (version, name) {
                return getPartial(version, name);
            },
            getAllPartials: function (version) {
                return getAllPartials(version);
            }

        };

    });
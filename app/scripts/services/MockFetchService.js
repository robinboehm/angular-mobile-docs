"use strict";

angular.module("angular-mobile-docs")
    .factory("MockFetchService", function ($http, $q) {

        var config = {
            url: "http://apidocs.angularjs.de/code/"
        };

        var getVersionList = function (version) {
            return $http.get(config.url+"versions.json");
        }

        var getFileList = function (version) {
            return $http.get(
                config.url
                    + version
                    + "/docs/partials/api/filelist.json");
        }

        var getPartial = function (version, name) {
            return $http.get(
                config.url
                    + version
                    + "/docs/partials/api/" + name);
        }

        var getAllPartials = function (version) {
            var promises = [];
            var fileNameList = getFileList(version);

            angular.forEach(fileNameList, function (fileName) {
                promises.push(getPartial(fileName, version));
            })

            return $q.all(promises);
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
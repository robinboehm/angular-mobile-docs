"use strict";

angular.module("angular-mobile-docs")
    .factory("FetchService", function ($http, $q, baseUrl) {

        var getVersionList = function () {
            return $http.get(
                baseUrl
                    + "versions/"
                    + "index.json"
                , {cache: true});
        }

        var getFileList = function (version) {
            return $http.get(
                baseUrl
                    + "versions/"
                    + version
                    + ".api.json"
                , {cache: true}
            );
        }

        var getPartial = function (version, name) {
            return $http.get(
                baseUrl
                    + "code/"
                    + version
                    + "/docs/partials/api/" + name
                , {cache: true});
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
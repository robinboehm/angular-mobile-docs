"use strict";

angular.module("angular-mobile-docs")
    .factory("AngularGitFetchService", function ($http, $filter) {

        var get = function (url) {
            return $http.get(url);
        }

        var getVersionList = function () {
            //return get("https://api.github.com/repos/angular/code.angularjs.org/contents/");
            return get("mock/versions.json");
        }

        var getAPI = function (version) {
            //return get("https://api.github.com/repos/angular/code.angularjs.org/contents/"+version+"/docs/partials/api/?ref=master");
            return get("mock/api.json");
        }

        var getPartial = function (version, name) {
            //return get("https://api.github.com/repos/angular/code.angularjs.org/contents/"+version+"/docs/partials/api/"+name);
            return get("mock/partial.json");
        }

        return{
            getVersionList: function () {
                return getVersionList();
            },
            getAPI        : function (version) {
                return getAPI(version);
            },
            getPartial    : function (name, version) {
                return getPartial(version, name);
            }

        };

    });
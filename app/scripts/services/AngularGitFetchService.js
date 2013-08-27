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

        var getAPI = function(version){
            //return get("https://api.github.com/repos/angular/code.angularjs.org/contents/"+version+"/docs/partials/api/?ref=master");
            return get("mock/api.json");
        }

        //https://github.com/angular/code.angularjs.org/blob/master/1.2.0rc1/docs/docs-data.js
        /*
         angular.module('docsData', []).value('NG_PAGES',[
         {"section":"api","id":"index","shortName":"
         */

        return{
            getVersionList: function () {
                return getVersionList();
            },
            getAPI: function (version) {
                return getAPI(version);
            }

        };

    });
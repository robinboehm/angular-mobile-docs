"use strict";

angular.module("angular-mobile-docs")
    .controller("ShameCtrl", function ($scope, AngularGitFetchService) {
        $scope.config = {
            version: "1.2.0rc1"
        };
        $scope.versions = AngularGitFetchService.getVersionList();
        $scope.api = AngularGitFetchService.getAPI($scope.config.version);


        $scope.filterVersions = function (item) {
            return !!(item.name.match(/^(1.0.[2-9])|(1.[1-9][0-9]?.\w+)/));
        }

        $scope.getPartial = function (version, name) {
            var promise = AngularGitFetchService.getPartial(name, version);

            promise.then(function (data) {
                $scope.partial = decode64(data.data.content);
            });

            return promise;
        };

        $scope.setVersion = function (name) {
            $scope.config.version = name;
            $scope.api = AngularGitFetchService.getAPI($scope.config.version);
        };
    })
;
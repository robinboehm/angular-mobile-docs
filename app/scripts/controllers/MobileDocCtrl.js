"use strict";

angular.module("angular-mobile-docs")
    .controller("MobileDocCtrl", function ($scope, MockFetchService, $location, $routeParams) {
        // TODO: Should be injected via constant
        $scope.config = {
            version: "1.2.0rc1"
        };

        // Register search inside of this scope
        $scope.search = "";

        // Init
        $scope.versions = MockFetchService.getVersionList();
        $scope.api = MockFetchService.getFileList($scope.config.version);


        $scope.filterVersions = function (item) {
            return !!(item.match(/^(1.0.[2-9])|(1.[1-9][0-9]?.\w+)/));
        }

        $scope.$watch('config.version', function (currentValue, oldValue) {
            function calculateRoute(newVersion) {
                var url = "/" + newVersion;

                if ($routeParams.name) {
                    url += "/api/" + $routeParams.name;
                }

                return url;
            }

            $scope.api = MockFetchService.getFileList($scope.config.version);
            $location.path(calculateRoute(currentValue));
        });
    })
;
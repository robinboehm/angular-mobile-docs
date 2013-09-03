'use strict';

angular.module('angular-mobile-docs')
    .controller('MobileDocCtrl', function ($scope, FetchService, $location, $routeParams, initVersion) {
        // TODO: Should be injected via constant
        $scope.config = {
            version: initVersion
        };

        // Register search inside of this scope
        $scope.search = '';

        // Init
        $scope.versions = FetchService.getVersionList();
        $scope.api = FetchService.getFileList($scope.config.version);


        $scope.leftMenuActive = false;
        $scope.rightMenuActive = false;

        $scope.swipeRight = function () {
            if (!$scope.rightMenuActive) {
                $scope.leftMenuActive = true;
            }
            $scope.rightMenuActive = false;
        };

        $scope.swipeLeft = function () {
            if (!$scope.leftMenuActive) {
                $scope.rightMenuActive = true;
            }
            $scope.leftMenuActive = false;
        };

        $scope.clickLeft = function () {
            $scope.leftMenuActive = !$scope.leftMenuActive;
            $scope.rightMenuActive = false;
        };

        $scope.clickRight = function () {
            $scope.rightMenuActive = !$scope.rightMenuActive;
            $scope.leftMenuActive = false;
        };

        // Could be done in the html
        $scope.handleLeftMenuClick = function () {
            $scope.leftMenuActive = $scope.leftMenuActive;
        };

        // Could be done in the html
        $scope.handleRightMenuClick = function () {
            $scope.rightMenuActive = $scope.leftMenuActive;
        };


        $scope.filterVersions = function (item) {
            return !!(item.match(/^(1.0.[2-9])|(1.[1-9][0-9]?.\w+)/));
        };

        $scope.$watch('config.version', function (currentValue) {
            function calculateRoute(newVersion) {
                var url = '/' + newVersion;

                if ($routeParams.name) {
                    url += '/api/' + $routeParams.name;
                }

                return url;
            }

            $scope.api = FetchService.getFileList($scope.config.version);
            $location.path(calculateRoute(currentValue));
        });
    })
;
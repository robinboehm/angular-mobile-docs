"use strict";

angular.module("angular-mobile-docs")
    .controller("ContentCtrl", function ($scope, $routeParams, MockFetchService) {
        if (angular.isDefined($routeParams.name)
            && angular.isDefined($routeParams.version)) {
            MockFetchService.getPartial($routeParams.version, $routeParams.name)
                .then(function (data) {
                    $scope.partial = data.data;
                });
        }
    })
;
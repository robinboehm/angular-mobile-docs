"use strict";

angular.module("angular-mobile-docs")
    .controller("ContentCtrl", function ($scope, $routeParams,FetchService) {
        if (angular.isDefined($routeParams.name)
            && angular.isDefined($routeParams.version)) {
            FetchService.getPartial($routeParams.version, $routeParams.name)
                .then(function (data) {
                    $scope.partial = data.data;
                });
        }
    })
;
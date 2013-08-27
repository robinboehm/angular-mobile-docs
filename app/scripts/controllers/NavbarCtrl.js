"use strict";

angular.module("angular-mobile-docs")
    .controller("NavbarCtrl", function ($scope, $location) {

        $scope.currentVersion = "1.2.0rc1";

        $scope.$watch('currentVersion', function(a, b){
            $location.path('/api/'+ a || '1.1.0')
        });

    });

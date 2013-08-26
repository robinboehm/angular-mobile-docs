"use strict";

angular.module("angular-mobile-docs")
    .controller("ShameCtrl", function ($scope, AngularGitFetchService) {
        $scope.config = {
            version: "1.2.0rc1"
        };
        $scope.versions = AngularGitFetchService.getVersionList();
        $scope.api = AngularGitFetchService.getAPI($scope.config.version);


        $scope.filterVersions = function(data){
            data.select(function(item){
               return (item.name.match(/^(1.0.[2-9])|(1.[1-9][0-9]?.\w+)/));
            });
        }

        $scope.setVersion = function(name){
            $scope.config.version = name;
            $scope.api = AngularGitFetchService.getAPI($scope.config.version);
        }
    })
;
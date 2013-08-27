"use strict";

angular.module("angular-mobile-docs")
    .controller("ShameCtrl", function ($scope, AngularGitFetchService) {
        $scope.config = {
            version: "1.2.0rc1"
        };
        $scope.versions = AngularGitFetchService.getVersionList();
        $scope.api = AngularGitFetchService.getAPI($scope.config.version);


        $scope.filterVersions = function(dataList){
            return true;
            if(angular.isUndefined(data)){
                console.log("data",data);
                return true;
            }

            var resultSet = [];
            for (var i = 0; i < data.length; i++){
                var item = data[i];
                if(!!(item.name.match(/^(1.0.[2-9])|(1.[1-9][0-9]?.\w+)/))){
                    resultSet.push(item);
                }
            }

            return resultSet;
        }

        $scope.setVersion = function(name){
            $scope.config.version = name;
            $scope.api = AngularGitFetchService.getAPI($scope.config.version);
        }
    })
;
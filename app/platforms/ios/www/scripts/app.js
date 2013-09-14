'use strict'

angular.module("angular-mobile-docs", ["ngRoute", "ngAnimate", "ngSanitize", "ngTouch", 'bootstrap', 'bootstrapPrettify'])
    .constant("baseUrl", "http://apidocs.angularjs.de/")
    .constant("initVersion", "1.2.0rc1")
    .config(function ($routeProvider, initVersion) {
        $routeProvider
            .when('/:version', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .when('/:version/api/:name', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .otherwise({ redirectTo: initVersion });
    })
    .run(function($timeout,FetchService){
        /*$timeout(function(){
            FetchService.getAllPartials("1.2.0-rc.2").notify = function(i,count){
                console.log(i,count);
            };
        },5000);
        */
    });
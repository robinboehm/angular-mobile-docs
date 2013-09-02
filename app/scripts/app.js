'use strict'

angular.module("angular-mobile-docs", ["ngRoute", "ngAnimate", "ngSanitize"])
    .constant("baseUrl", "http://apidocs.angularjs.de/")
    .constant("initVersion", "1.2.0rc1")
    .config(function ($routeProvider, initVersion) {
        $routeProvider
            .when('/:version', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .when('/:version/api/:name', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .otherwise({ redirectTo: initVersion });
    });
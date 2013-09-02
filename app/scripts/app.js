'use strict'

angular.module("angular-mobile-docs", ["ngRoute", "ngAnimate", "ngSanitize"])
    .constant("baseUrl", "http://apidocs.angularjs.de/")
    .config(function ($routeProvider) {
        $routeProvider
            .when('/:version', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .when('/:version/api/:name', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .otherwise({ redirectTo: '/1.2.0rc1' });
    });
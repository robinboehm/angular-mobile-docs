'use strict'

angular.module("angular-mobile-docs", ["ngRoute", "ngAnimate", "ngSanitize", "docsData"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/:version', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .when('/:version/api/:name', { templateUrl: 'views/api.html', controller: 'ContentCtrl' })
            .otherwise({ redirectTo: '/1.2.0rc1' });

    });
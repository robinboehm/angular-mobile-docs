'use strict'

angular.module("angular-mobile-docs", ["ngRoute","ngAnimate"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/api/:version', { templateUrl: 'api.html', controller: 'ShameCtrl' })
      .otherwise({ redirectTo: '/api/1.1.0' });

  });
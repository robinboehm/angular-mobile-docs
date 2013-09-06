'use strict';

angular.module('angular-mobile-docs')
    .filter('cleandoc', function () {
        return function (text) {
            return String(text).replace('.html', '');
        };
    });

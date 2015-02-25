(function() {
    'use strict';

    angular.module('spaCourse', [
        'ui.router',
        'components'
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/main');
        $locationProvider.html5Mode(true);
    });

})();

(function() {
    'use strict';

    angular.module('spaCourse')
    .config(function($stateProvider) {
        $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '/app/main/main.html',
            controller: 'Products',
            controllerAs: 'vm'
        })
        .state('single-product', {
            url: '/single-product/:id',
            templateUrl: '/app/main/single/single-product.html',
            controller: 'SingleProduct',
            controllerAs: 'vm'
        });
    });

})();

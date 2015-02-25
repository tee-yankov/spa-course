(function() {
    'use strict';

    angular.module('components')
    .directive('navbar', navbar);

    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: '/app/components/navbar/navbar.html'
        };

        return directive;
    }

})();

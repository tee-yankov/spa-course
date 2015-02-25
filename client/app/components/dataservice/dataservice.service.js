(function() {
    'use strict';

    angular.module('components')
    .factory('dataservice', dataservice);

    function dataservice($http) {
        var service = {
            getProducts: getProducts
        };

        return service;

        function getProducts() {
            return $http.get('/assets/products.json')
            .then(requestCompleted)
            .catch(requestFailed);
        }

        function requestCompleted(data) {
            return data.data;
        }

        function requestFailed(err) {
            console.log(err);
            return err;
        }
    }

})();

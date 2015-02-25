(function() {
    'use strict';

    angular.module('spaCourse')
    .controller('Products', Products);

    function Products(dataservice) {
        var vm = this;

        activate();

        function activate() {
            return getProducts();
        }

        function getProducts() {
            return dataservice.getProducts()
            .then(function(data) {
                vm.products = data;
            });

        }
    }

})();

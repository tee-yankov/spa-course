(function() {
    'use strict';

    angular.module('spaCourse')
    .controller('SingleProduct', SingleProduct);

    function SingleProduct(dataservice, $stateParams) {
        var vm = this;
        var id = $stateParams.id;

        activate();

        function activate() {
            return getProducts();
        }

        function getProducts() {
            return dataservice.getProducts()
            .then(function(data) {
                vm.product = data[id];
            });
        }
    }

})();

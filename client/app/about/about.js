(function() {
  'use strict';

  angular.module('spaCourse')
  .config(function($stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: '/app/about/about.html'
    });

  });
})();

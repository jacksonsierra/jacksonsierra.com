'use strict';

// Declare app level module which depends on views, and components
var jacksonSierra = angular.module('jacksonSierra', [
    'ui.router'
  , 'jacksonSierra.view1'
  , 'jacksonSierra.view2'
  , 'jacksonSierra.version'
]);

jacksonSierra.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/view1');

  $stateProvider
    .state('view1', {
        url: '/view1'
      , templateUrl: './app/components/view1/view1.html'
      , controller: 'View1Ctrl'
    })
    .state('view2', {
        url: '/view2'
      , templateUrl: './app/components/view2/view2.html'
      , controller: 'View2Ctrl'
    });
}]);

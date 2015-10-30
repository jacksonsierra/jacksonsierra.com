'use strict';

// Declare app level module which depends on views, and components
var jacksonSierra = angular.module('jacksonSierra', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

jacksonSierra.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise({redirectTo: '/view1'});
}]);

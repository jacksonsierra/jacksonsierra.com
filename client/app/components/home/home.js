'use strict';

angular.module('jacksonSierra.home', [])

.controller('HomeCtrl', ['$scope', 'Images', function($scope, Images) {
  $scope.slideInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.slides = Images.query({page: 'home'});
}]);

/*
    file: home.js
    - - - - - - - - - - -
    Controller for Home page/component,
    uses the Images factory from services.js
    to query images for a given page

    Home view uses Bootstrap's image carousel
 */

'use strict';

angular.module('jacksonSierra.home', [])

.controller('HomeCtrl', ['$scope', 'Images', function($scope, Images) {
  $scope.slideInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.slides = Images.query({page: 'home'});
}]);

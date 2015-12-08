'use strict';

angular.module('jacksonSierra.home', [])

.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.slideInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.slideArray = [
      {
          url: '../img/botswana-color.min.jpg'
        , caption: 'OKAVANGO DELTA, BOTSWANA'
      }
    , {
          url: '../img/belize.min.jpg'
        , caption: 'PLACENCIA, BELIZE'
      }
    , {
          url: '../img/johnsville.min.jpg'
        , caption: 'JOHNSVILLE, CALIFORNIA'
      }
  ];
}]);

/*
    file: header.js
    - - - - - - - - - - -
    Controller for shared Header component,
    which lists the pages of the website and
    controls the dynamic CSS styling based on
    what page is clicked
 */

'use strict';

angular.module('jacksonSierra.header', [])

.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.pages = [
      {
          'title': 'HOME'
        , 'state': 'root'
      }
    , {
          'title': 'APPS'
        , 'state': '.apps'
      }
    , {
          'title': 'BLOG'
        , 'state': '.blog'
      }
    , {
          'title': 'ABOUT'
        , 'state': '.about'
      }
  ];


  $scope.pageSelected = 0;
  $scope.hamburgerClicked = false;

  $scope.clickPage = function($index) {
    $scope.pageSelected = $index;
  };

  $scope.toggleMenu = function() {
    $scope.hamburgerClicked = !$scope.hamburgerClicked;
  };
}]);
'use strict'

angular.module('jacksonSierra.header', [])

.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.hamburgerClicked = false;

  $scope.toggleMenu = function() {
    $scope.hamburgerClicked = !$scope.hamburgerClicked;

    if($scope.hamburgerClicked) {
      angular.element('.navibar').css('display', 'block');
      angular.element('.logo').css('margin-bottom', '15px')
    } else {
      angular.element('.navibar').css('display', 'none');
      angular.element('.logo').css('margin-bottom', '0px')
    }
  }
}]);
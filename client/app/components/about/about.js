'use strict';

angular.module('jacksonSierra.about', [])

.controller('AboutCtrl', ['$scope', 'Images', function($scope, Images) {
  $scope.images = Images.query({page: 'about'});
}]);
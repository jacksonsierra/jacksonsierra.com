/*
    file: about.js
    - - - - - - - - - - -
    Controller for About page/component,
    uses the Images factory from services.js
    to query images for a given page
 */

'use strict';

angular.module('jacksonSierra.about', [])

.controller('AboutCtrl', ['$scope', 'Images', function($scope, Images) {
  $scope.loading = true;
  Images.query({page: 'about'})
        .$promise.then(function(images) {
          $scope.images = images;
          $scope.loading = false;
        });
}]);
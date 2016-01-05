/*
    file: apps.js
    - - - - - - - - - - -
    Controller for Apps page/component,
    uses the Apps factory from services.js
    to retrieve all Apps' information
 */

'use strict';

angular.module('jacksonSierra.apps', [
    'ui.bootstrap'
])

.controller('AppsCtrl', ['$scope', 'Apps', function($scope, Apps) {
  $scope.loading = true;
  Apps.query()
      .$promise.then(function(apps) {
        $scope.apps = apps;
        $scope.loading = false;
      });
}]);

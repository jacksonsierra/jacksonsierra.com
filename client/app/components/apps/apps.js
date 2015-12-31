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

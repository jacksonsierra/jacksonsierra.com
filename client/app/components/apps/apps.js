'use strict';

angular.module('jacksonSierra.apps', [
    'ui.bootstrap'
])

.controller('AppsCtrl', ['$scope', 'Apps', function($scope, Apps) {
  $scope.apps = Apps.query();
}]);

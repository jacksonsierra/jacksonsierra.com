'use strict';

angular.module('jacksonSierra.about', ['ngSanitize'])

.controller('AboutCtrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.descrip = $sce.trustAsHtml('<strong>Jackson Sierra</strong> is a software engineer and thought partner interested in tackling civic and socioeconomic problems through the use of technology.<br>
                    <br>
                    His studies in economics in the heart of Silicon Valley saw him pursue a career in the technology industry at a startup where he did strategy and data analysis.<br>
                    <br>
                    His time there ultimately showed him the incredible impact one can have building technology that enables the masses.  As such, he was driven to learn computer programming to accomplish that goal.');
}]);
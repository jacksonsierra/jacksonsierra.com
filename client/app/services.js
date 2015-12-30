'use strict';

angular.module('jacksonSierra.services', [
    'ngResource'
])

.factory('Images', ['$resource', function($resource) {
  return $resource('/api/images');
}])

.factory('Blog_Posts', ['$resource', function($resource) {

}])

.factory('Apps', ['$resource', function($resource) {

}]);

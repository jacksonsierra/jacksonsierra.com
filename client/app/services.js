'use strict';

angular.module('jacksonSierra.services', [
    'ngResource'
])

.factory('Images', ['$resource', function($resource) {
  return $resource('/api/images');
}])

.factory('Blog_Posts', ['$resource', function($resource) {
  return $resource('/api/blog_posts');
}])

.factory('Apps', ['$resource', function($resource) {
  return $resource('/api/apps');
}]);

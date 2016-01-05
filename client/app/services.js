/*
    file: services.js
    - - - - - - - - - - -
    Declaration of different factories for
    images, apps and blog posts using ngResource
    that send low-level $http requests to server
    to query content from database
 */

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

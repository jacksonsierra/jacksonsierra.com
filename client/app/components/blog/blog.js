/*
    file: blog.js
    - - - - - - - - - - -
    Controller for Blog page/component,
    uses the Blog_Posts factory from services.js
    to gather all blog posts from server

    Also creates a custom blogPost directive
    that uses a different controller/view that
    injects HTML stored on server
 */

'use strict';

angular.module('jacksonSierra.blog', [
    'ngSanitize'
])

// Parent controller for Blog component
.controller('BlogCtrl', ['$scope', 'Blog_Posts', function($scope, Blog_Posts) {
  $scope.loading = true;
  Blog_Posts.query()
            .$promise.then(function(blogPosts) {
              $scope.blogPosts = blogPosts;
              $scope.loading = false;
            });
}])

// Child directive for Blog component called BlogPost
.directive('blogPost', function() {
  return {
      restrict: 'E'
    , scope: {
          'postChrLimit': '='
        , 'postBody': '='
        , 'postReadMore': '='
      }
    , templateUrl: './html/components/blog/blog-post.min.html'
    , controller: ['$scope', '$sce', PostCtrl]
  };
});

// Child BlogPost controller
function PostCtrl($scope, $sce) {
  $scope.postSnippet = $sce.trustAsHtml($scope.postBody.substr(0, $scope.postChrLimit));

  $scope.postBody = $sce.trustAsHtml($scope.postBody);

  $scope.togglePost = function() {
    $scope.postReadMore = !$scope.postReadMore;
  };
}

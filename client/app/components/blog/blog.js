'use strict';

angular.module('jacksonSierra.blog', [
    'ngSanitize'
])

.controller('BlogCtrl', ['$scope', 'Blog_Posts', function($scope, Blog_Posts) {
  $scope.blogPosts = Blog_Posts.query();
}])

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

function PostCtrl($scope, $sce) {
  $scope.postSnippet = $sce.trustAsHtml($scope.postBody.substr(0, $scope.postChrLimit));

  $scope.postBody = $sce.trustAsHtml($scope.postBody);

  $scope.togglePost = function() {
    $scope.postReadMore = !$scope.postReadMore;
  };
}

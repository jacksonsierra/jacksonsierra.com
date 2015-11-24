'use strict';

angular.module('jacksonSierra.blog', [])

.controller('BlogCtrl', ['$scope', function($scope) {
  $scope.blogArray = [
      {
          'headline': 'The Lean Startup Conference 2015'
        , 'subhead':  'Takeaways from a millenial'
        , 'date': new Date('2015-11-23')
        , 'dateFormatted': moment('2015-11-23').format('dddd, MMMM Do YYYY')
        , 'tags': [
              'ENTREPRENEURSHIP'
            , 'MANAGEMENT'
            , 'DATA'
          ] 
        , 'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    , {
          'headline': 'My Plan for iOS'
        , 'subhead': 'A web developer switching to mobile'
        , 'date': new Date('2015-11-27')
        , 'dateFormatted': moment('2015-11-27').format('dddd, MMM Do YYYY')
        , 'tags': [
              'iOS'
            , 'UNSTRUCTURED LEARNING'
            , 'AUTONOMOUS LEARNING'
          ]
        , 'body': 'Lorem ipsum'
      }
  ];
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
    , controller: ['$scope', PostCtrl]
  };
});

function PostCtrl($scope) {
  $scope.togglePost = function() {
    $scope.postReadMore = !$scope.postReadMore;
  };
}

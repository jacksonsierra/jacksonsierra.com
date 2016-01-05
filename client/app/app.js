/*
    file: app.js
    - - - - - - - - - - -
    Configuration for jacksonSierra Angular app,
    which uses Angular UI Router to handle state
    change between different components

    There is also a Google Analytics' listener
    to handle the traversal through different views
    given that it is a single-page webapp
 */

'use strict';

// Declare app level module which depends on views, and components
var jacksonSierra = angular.module('jacksonSierra', [
    'ui.router'
  , 'jacksonSierra.header'
  , 'jacksonSierra.footer'
  , 'jacksonSierra.home'
  , 'jacksonSierra.apps'
  , 'jacksonSierra.blog'
  , 'jacksonSierra.about'
  , 'jacksonSierra.services'
]);

/*
    UI Router configuration retains header/footer components
    across all pages and nested views within the container
    state that actually maintains the different page bodies
 */
jacksonSierra.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
        url: '/'
      , views: {
          'header@': {
            templateUrl: './html/shared/header/header.min.html'
          , controller: 'HeaderCtrl'
          }
        , 'container@': {
            templateUrl: './html/components/home/home.min.html'
          , controller: 'HomeCtrl'
        }
        , 'footer@': {
            templateUrl: './html/shared/footer/footer.min.html'
          , controller: 'FooterCtrl'
        } 
      }
    })
    .state('root.apps', {
        url: 'apps'
      , views: {
          'container@': {
            templateUrl: './html/components/apps/apps.min.html'
          , controller: 'AppsCtrl'
        }
      }
    })
    .state('root.blog', {
        url: 'blog'
      , views: {
          'container@': {
            templateUrl: './html/components/blog/blog.min.html'
          , controller: 'BlogCtrl'
        }
      }
    })
    .state('root.about', {
        url: 'about'
      , views: {
          'container@': {
            templateUrl: './html/components/about/about.min.html'
          , controller: 'AboutCtrl'
        }
      }
    });
}]);

/*
    Google Analytics' listener to handle page view
    traversal in a single-page app
 */
jacksonSierra.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
  $rootScope
    .$on('$stateChangeSuccess', function(event) {
      if(!$window.ga) {
        return;
      }

      $window.ga('send', 'pageview', { page: $location.path() });
    });
}]);

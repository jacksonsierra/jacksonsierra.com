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
]);

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

jacksonSierra.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
  $rootScope
    .$on('$stateChangeSuccess', function(event) {
      if(!$window.ga) {
        return;
      }

      $window.ga('send', 'pageview', { page: $location.path() });
    });
}]);

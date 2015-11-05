'use strict'

// Declare app level module which depends on views, and components
var jacksonSierra = angular.module('jacksonSierra', [
    'ui.router'
  , 'jacksonSierra.header'
  , 'jacksonSierra.footer'
  , 'jacksonSierra.home'
  , 'jacksonSierra.apps'
  , 'jacksonSierra.blog'
  , 'jacksonSierra.about'
  , 'jacksonSierra.version'
]);

jacksonSierra.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
        url: '/'
      , views: {
          'header@': {
            templateUrl: './app/shared/header/header.html'
          , controller: 'HeaderCtrl'
          }
        , 'container@': {
            templateUrl: './app/components/home/home.html'
          , controller: 'HomeCtrl'
        }
        , 'footer@': {
            templateUrl: './app/shared/footer/footer.html'
          , controller: 'FooterCtrl'
        } 
      }
    })
    .state('root.apps', {
        url: 'apps'
      , views: {
          'container@': {
            templateUrl: './app/components/apps/apps.html'
          , controller: 'AppsCtrl'
        }
      }
    })
    .state('root.blog', {
        url: 'blog'
      , views: {
          'container@': {
            templateUrl: './app/components/blog/blog.html'
          , controller: 'BlogCtrl'
        }
      }
    })
    .state('root.about', {
        url: 'about'
      , views: {
          'container@': {
            templateUrl: './app/components/about/about.html'
          , controller: 'AboutCtrl'
        }
      }
    });
}]);

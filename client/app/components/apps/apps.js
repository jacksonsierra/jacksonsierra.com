'use strict';

angular.module('jacksonSierra.apps', [
    'ui.bootstrap'
])

.controller('AppsCtrl', ['$scope', function($scope) {
  $scope.appsArray = [
      {
          'title': 'immedia'
        , 'url': 'http://immedia.xyz'
        , 'links': {
              'web': {
                  'title': 'Web'
                , 'url': 'http://immedia.xyz'
                , 'icon': './img/www.min.png'
              }
            , 'chrome': {
                  'title': 'Google Chrome'
                , 'url': 'http://bit.ly/1GjqyVh'
                , 'icon': './img/chrome.min.png'
              }
            , 'github': {
                  'title': 'Github'
                , 'url': 'https://github.com/The-Undefineds/immedia'
                , 'icon': './img/github.min.png'
              }
            , 'youtube': {
                  'title': 'YouTube'
                , 'url': 'https://youtu.be/wLI6h5Ehua0'
                , 'icon': './img/youtube.min.png'
              }
          }
        , 'photo': {
              'background-image': 'url(\'./img/immedia-stock.min.png\')'
            , 'background-size': 'contain'
          }
        , 'descrip': 'Real-time news and social media aggregator for Wikipedia available on the web or as a Google Chrome browser extension'
        , 'font': { 
              'font-family': 'Nunito'
            , 'color': '#00BFFF'
          }
        , 'stack': [
              'REACT'
            , 'D3'
            , 'NODE.JS'
            , 'EXPRESS'
            , 'MONGO DB'
            , 'GULP'
            , 'DIGITAL OCEAN'
          ]
      }
    , {
          'title': 'Murmur'
        , 'url': 'http://murmur2.xyz'
        , 'links': {
              'web': {
                  'title': 'Web'
                , 'url': 'http://murmur2.xyz'
                , 'icon': './img/www.min.png'
              }
            , 'mobile': {
                  'title': 'iOS'
                , 'url': 'https://appetize.io/app/x7qywn60g6y0bn7krq2x7tkukw'
                , 'icon': './img/ios.min.png'
            }
            , 'github': {
                  'title': 'Github'
                , 'url': 'https://github.com/repl-rebels/murmur-mobile/tree/production'
                , 'icon': './img/github.min.png'
              }
          }
        , 'photo': {
              'background-image': 'url(\'./img/murmur-stock.min.png\')'
            , 'background-size': 'contain'
          }
        , 'descrip': 'Anonymous messaging board on web, iOS and Android platforms'
        , 'font': { 
              'font-family': 'Sarina'
            , 'color': 'rgb(5,101,188)'
          }
        , 'stack': [
              'REACT'
            , 'REACT-NATIVE'
            , 'NODE.JS'
            , 'EXPRESS'
            , 'FIREBASE'
            , 'DIGITAL OCEAN'
          ]
      }
    , {
          'title': 'Koupler'
        , 'url': 'http://kouple.us'
        , 'links': {
              'web': {
                  'title': 'Web'
                , 'url': 'http://kouple.us'
                , 'icon': './img/www.min.png'
              }
            , 'github': {
                  'title': 'Github'
                , 'url': 'https://github.com/repl-rebels/Koupler'
                , 'icon': './img/github.min.png'
              }
          }
        , 'photo': {
              'background-image': 'url(\'./img/koupler-stock-2.min.jpg\')'
            , 'background-size': 'cover'
          }
        , 'descrip': 'Match-making service for couples interested in doing activities with other couples'
        , 'font': {
              'font-family': 'Lato'
            , 'color': 'rgb(255, 255, 255)'
            , 'text-shadow': '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          }
        , 'stack': [
              'ANGULAR'
            , 'NODE.JS'
            , 'EXPRESS'
            , 'MYSQL'
            , 'DIGITAL OCEAN'
          ]
      }
  ];
}]);

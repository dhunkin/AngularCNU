(function() {
  'use strict';

  angular.module('cnuApp', [
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/time");

    $stateProvider
        .state('time', {
          url: '/time',
          templateUrl: 'time/time.tmpl.html',
          controller: 'TimeCtrl'
        })
        .state('ip', {
          url: '/ip',
          templateUrl: 'ip/ip.tmpl.html',
          controller: 'IpCtrl'
        });
  })
  .run(function() {

  });
})();

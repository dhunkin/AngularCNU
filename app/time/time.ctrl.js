'use strict';

angular.module('cnuApp')
  .controller('TimeCtrl', function($scope, $rootScope, $http, $interval) {
    $rootScope.currentPageTitle = 'Time Service';

    // $interval(function() {
      $http({
        method: 'GET',
        url: 'http://www.timeapi.org/utc/now'
      })
      .then(function(response) {
        $scope.currentTime = response.data && response.data.dateString;
      });
    // }, 1000);
  });
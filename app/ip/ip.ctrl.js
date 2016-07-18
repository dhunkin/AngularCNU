'use strict';

angular.module('cnuApp')
  .controller('IpCtrl', function($scope, $rootScope, $http) {
    $rootScope.currentPageTitle = 'IP Geolocation';

    $scope.resolveLocation = function() {
      $scope.ipLocation = '';
      if($scope.ipToResolve) {
        $http({
          method: 'GET',
          url: 'http://ip-api.com/json/' + ($scope.ipToResolve || '')
        })
        .then(function(response) {
          var country = response.data.country || '',
            city = response.data.city || '';
          $scope.ipLocation = country + ' - ' + city;
        });
      }
    };
  });
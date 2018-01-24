var app = angular.module('MyFirstAPP', []);

app.controller('MainCtrl', function ($scope, $http, myService) {

  // Call service to get data from API
  myService.getResponders().then(function (response) {
    $scope.firstTenRecords = response.data.data.slice(0, 10);
  });
});

// make a factory to get data 
app.factory("myService", ['$http', function ($http) {
  return {
    getResponders: function () {
      return $http.get('https://api.mcmakler.de/v1/advertisements')
    }
  };
}]);
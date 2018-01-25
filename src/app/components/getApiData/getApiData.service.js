(function() {
  'use strict';

  angular
    .module('frontEndChallenger')
    .factory('getDataFromApi', getDataFromApi);

  /** @ngInject */
  function getDataFromApi($log, $http) {
    var apiHost = 'https://api.mcmakler.de/v1/advertisements';

    var service = {
      apiHost: apiHost,
      GetData: GetData
    };

    return service;

    function GetData() {
      // if (!limit) {
      //   limit = 30;
      // }
     // $('#myDiv').hide();
      return $http.get(apiHost)
        .then(GetDataComplete)
        .catch(GetDataFailed);

      function GetDataComplete(response) {
        $('#myDiv').hide();
        return response.data;
      }

      function GetDataFailed(error) {
        $log.error('XHR Failed for GetData.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();

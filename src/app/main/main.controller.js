(function() {
  'use strict';

  angular
    .module('frontEndChallenger')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, getDataFromApi) {
    var vm = this;
    vm.firstTenRecords;
    getDataFromApi.GetData().then(function(response) {
      vm.firstTenRecords = response.data.slice(0, 10);
      // console.log(JSON.stringify(vm.firstTenRecords));
    });
  }
})();

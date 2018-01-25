(function() {
  'use strict';

  angular
    .module('frontEndChallenger')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
    $('#myDiv').show();

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();

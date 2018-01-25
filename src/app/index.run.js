(function() {
  'use strict';

  angular
    .module('frontEndChallenger')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

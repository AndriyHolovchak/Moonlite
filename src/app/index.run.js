(function() {
  'use strict';

  angular
    .module('moonlite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

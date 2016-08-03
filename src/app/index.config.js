(function() {
  'use strict';

  angular
    .module('moonlite')
    .config(config);

  /** @ngInject */
  function config(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 3000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'top'
    });
  }

})();

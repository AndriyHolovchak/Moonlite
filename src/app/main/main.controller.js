(function() {
  'use strict';

  angular
    .module('moonlite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state) {
    var vm = this;
    vm.stateName = $state.current.name;

    $scope.$on('$stateChangeStart',
            function (event, toState) {
              vm.stateName = toState.name;
            });
  }
})();

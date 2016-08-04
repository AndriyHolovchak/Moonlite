(function() {
  'use strict';

  angular
    .module('moonlite')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($localStorage) {
      var vm = this;

      vm.logOut = function() {
        $localStorage.userCred = {};
      }
    }
  }

})();

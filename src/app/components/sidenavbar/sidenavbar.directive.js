/**
 * Created by Andriy on 25.07.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .directive('sideNavbar', sideNavbar);

    /** @ngInject */
    function sideNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/sidenavbar/sidenavbar.html',
            controller: SideNavbarController,
            controllerAs: 'sidebar',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function SideNavbarController() {
            //var vm = this;
        }
    }

})();

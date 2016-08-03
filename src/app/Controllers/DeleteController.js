/**
 * Created by Andriy on 03.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('DeleteController', DeleteController);

    /** @ngInject */
    function DeleteController($uibModalInstance, id, APIS, $state) {
        var vm = this;
        vm.closeModal = function() {
            $uibModalInstance.dismiss('cancel');
        };

        vm.remove = function() {
            APIS.deleteBook(id).then(function(res){
                vm.closeModal();
                $state.reload();
            });
        }
    }
})();

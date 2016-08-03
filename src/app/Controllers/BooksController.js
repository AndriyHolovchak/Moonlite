/**
 * Created by Andriy on 03.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('BooksController', BooksController);

    /** @ngInject */
    function BooksController($uibModal) {
        var vm = this;

        vm.showDeleteModal = function () {
            return $uibModal.open({
                keyboard: false,
                animation: true,
                templateUrl: 'app/templates/modal-delete.html',
                controller: 'DeleteController',
                controllerAs: 'delete'
                /*resolve: {
                    id: function () {
                        return id;
                    }
                }*/
            });
        }
    }
})();

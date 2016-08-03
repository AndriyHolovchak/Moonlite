/**
 * Created by Andriy on 03.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('BooksController', BooksController);

    /** @ngInject */
    function BooksController($uibModal, APIS) {
        var vm = this;

        APIS.getAllBooks().then(function(res){
            vm.books = res.data;
        });

        vm.showDeleteModal = function (id) {
            return $uibModal.open({
                keyboard: false,
                animation: true,
                templateUrl: 'app/templates/modal-delete.html',
                controller: 'DeleteController',
                controllerAs: 'delete',
                resolve: {
                    id: function () {
                        return id;
                    }
                }
            });
        }
    }
})();

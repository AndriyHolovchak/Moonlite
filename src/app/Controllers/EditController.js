/**
 * Created by Andriy on 03.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('EditController', EditController);

    /** @ngInject */
    function EditController(APIS, $stateParams) {
        var vm = this;

        APIS.getBookById($stateParams.id)
                .then(function(res){
                    console.log(res);
                    vm.book = res.data;

                    vm.name = vm.book.name;
                    vm.photo = vm.book.picture.url;
                    vm.file = vm.book.file.url;
                });

        vm.uploadPhoto = function (photo) {
            vm.photo = photo;
            vm.uploadError = null;
        };

        vm.uploadFile = function (file) {
            vm.file = file;
            vm.uploadError = null;
        };
    }
})();

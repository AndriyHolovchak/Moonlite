/**
 * Created by Andriy on 03.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('EditController', EditController);

    /** @ngInject */
    function EditController(APIS, $stateParams, $state, Upload, API_ROOT_URL, Notification) {
        var vm = this;

        var id = $stateParams.id;

        APIS.getBookById(id)
                .then(function(res){
                    vm.book = res.data;
                    vm.name = vm.book.name;
                    vm.existPhoto = vm.book.picture.url;
                    vm.existFile = vm.book.file.url;
                });

        vm.uploadPhoto = function (photo) {
            vm.photo = photo;
            vm.existPhoto = null;
        };

        vm.uploadFile = function (file) {
            vm.file = file;
            vm.existFile = null;
        };


        vm.editBook = function(name, file, photo) {
            vm.uploading = true;

            var sendObj = {
                'book[name]': name,
                'book[picture]': photo,
                'book[file]': file
            };

            Upload.upload({
                url: API_ROOT_URL + 'books/' + id,
                data: sendObj,
                method: 'PUT'
            }).then(function(res) {
                Notification({ message: 'Your book has been uploaded' }, 'success');
                $state.go('main.books');
                vm.uploading = false;
                return res;
            }, function(error) {
                vm.uploading = false;
                Notification({ message: 'Something happened with your uploading' }, 'warning');
            })
        }
    }
})();

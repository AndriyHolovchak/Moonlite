/**
 * Created by Andriy on 03.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('UploadController', UploadController);

    /** @ngInject */
    function UploadController(API_ROOT_URL, Upload, $state, Notification) {
        var vm = this;
        vm.uploading = false;

        vm.uploadPhoto = function (photo) {
            vm.photo = photo;
            vm.uploadError = null;
        }

        vm.uploadFile = function (file) {
            vm.file = file;
            vm.uploadError = null;
        }

        vm.addBook = function(name, file, photo) {
            vm.uploading = true;

            var sendObj = {
                'book[name]': name,
                'book[picture]': photo,
                'book[file]': file
            };

            Upload.upload({
                url: API_ROOT_URL + '/books',
                data: sendObj
            }).then(function(res) {
                Notification({ message: 'Your book has been uploaded' }, 'success');
                $state.go('main.books');
                vm.uploading = false;
                return res;
            }, function() {
                vm.uploading = false;
                Notification({ message: 'Something happened with your uploading' }, 'warning');
            })
        }
    }
})();

/**
 * Created by Andriy on 04.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('moonlite')
            .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state, $localStorage) {
        var vm = this;

        $localStorage.userCred = $localStorage.userCred || {};

        var login = 'Natalie';
        var password = 'admin';

        if ($localStorage.userCred.login == login && $localStorage.userCred.password == password) {
            $state.go('main.books');
        }

        vm.signIn = function(credential) {
            if(credential.login == login && credential.password == password) {
                vm.error = null;
                $localStorage.userCred = credential;
                $state.go('main.books');
            } else {
                vm.error = 'Email or password is not correct.'
            }
        }
    }
})();

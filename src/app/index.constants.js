(function() {
  'use strict';

  angular
    .module('moonlite')
    .constant('API_ROOT_URL', setApiRoot());

    function setApiRoot() {
      return "https://moonlite.herokuapp.com/";
    }
})();

(function() {
  'use strict';

  angular
    .module('moonlite')
    .constant('API_ROOT_URL', setApiRoot());

    function setApiRoot() {
      return "http://159.203.25.173/";
    }
})();

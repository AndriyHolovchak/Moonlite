(function() {
  'use strict';

  angular
    .module('moonlite')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        }).state('main.books', {
            url: 'books',
            templateUrl: 'app/templates/books.html',
            controller: 'BooksController',
            controllerAs: 'books'
        })

    $urlRouterProvider.otherwise('/books');
  }

})();

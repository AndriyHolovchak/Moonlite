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
        }).state('main.upload', {
            url: 'upload',
            templateUrl: 'app/templates/upload.html',
            controller: 'UploadController',
            controllerAs: 'upload'
        }).state('main.edit', {
            url: 'edit/:id',
            templateUrl: 'app/templates/edit.html',
            controller: 'EditController',
            controllerAs: 'edit'
        }).state('main.login', {
            url: 'login',
            templateUrl: 'app/templates/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        });

    $urlRouterProvider.otherwise('login');
  }

})();

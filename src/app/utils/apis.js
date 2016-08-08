/**
 * Created by Andriy on 03.08.2016.
 */

'use strict';
(function() {
    'use strict';

    angular
            .module('moonlite')
            .factory('APIS', APIS);

    /** @ngInject */
    APIS.$inject = ['API_ROOT_URL', '$http'];
    function APIS(API_ROOT_URL, $http) {

        function getAllBooks(params) {
            return $http.get(API_ROOT_URL + 'books' + params);
        }

        function deleteBook(id) {
            return $http.delete(API_ROOT_URL + 'books/' + id);
        }

        function getBookById(id) {
            return $http.get(API_ROOT_URL + 'books/' + id);
        }

        return {
            getAllBooks: getAllBooks,
            deleteBook: deleteBook,
            getBookById: getBookById
        }
    }
}());

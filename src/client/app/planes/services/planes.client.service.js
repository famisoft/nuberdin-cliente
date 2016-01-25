(function() {
    'use strict';

    angular
        .module('app.plane')
        .factory('Plane', Plane);

    Plane.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Plane($resource, API_BASE_URL) {

        var params = {
            planeId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/plane/:planeId';

        return $resource(API_URL, params, actions);

    }

})();

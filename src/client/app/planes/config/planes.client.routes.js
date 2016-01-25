(function() {
    'use strict';

    angular
        .module('app.plane')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listPlane',
                config: {
                    url: '/planes',
                    templateUrl: 'app/planes/views/list.html',
                    controller: 'PlaneController',
                    controllerAs: 'vm',
                    title: 'List Planes',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Planes'
                    }
                }
            },
            {
                state: 'createPlane',
                config: {
                    url: '/planes/create',
                    templateUrl: 'app/planes/views/create.html',
                    controller: 'PlaneController',
                    controllerAs: 'vm',
                    title: 'Create Plane'
                }
            },
            {
                state: 'viewPlane',
                config: {
                    url: '/planes/:planeId',
                    templateUrl: 'app/planes/views/view.html',
                    controller: 'PlaneController',
                    controllerAs: 'vm',
                    title: 'View Plane'
                }
            },
            {
                state: 'editPlane',
                config: {
                    url: '/planes/:planeId/edit',
                    templateUrl: 'app/planes/views/edit.html',
                    controller: 'PlaneController',
                    controllerAs: 'vm',
                    title: 'Edit Plane'
                }
            }
        ];
    }
})();

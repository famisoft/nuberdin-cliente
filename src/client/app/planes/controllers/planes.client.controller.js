(function () {
    'use strict';

    angular
        .module('app.plane')
        .controller('PlaneController', PlaneController);

    PlaneController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Plane',
        'TableSettings',
        'PlaneForm'];
    /* @ngInject */
    function PlaneController(logger,
        $stateParams,
        $location,
        Plane,
        TableSettings,
        PlaneForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Plane);
        vm.plane = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = PlaneForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Plane object
            var plane = new Plane(vm.plane);

            // Redirect after save
            plane.$save(function(response) {
                logger.success('Plane created');
                $location.path('planes/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Plane
        vm.remove = function(plane) {

            if (plane) {
                plane = Plane.get({planeId:plane.id}, function() {
                    plane.$remove(function() {
                        logger.success('Plane deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.plane.$remove(function() {
                    logger.success('Plane deleted');
                    $location.path('/planes');
                });
            }

        };

        // Update existing Plane
        vm.update = function() {
            var plane = vm.plane;

            plane.$update(function() {
                logger.success('Plane updated');
                $location.path('planes/' + plane.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewPlane = function() {
            vm.plane = Plane.get({planeId: $stateParams.planeId});
            vm.setFormFields(true);
        };

        vm.toEditPlane = function() {
            vm.plane = Plane.get({planeId: $stateParams.planeId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Plane View');
        }
    }

})();

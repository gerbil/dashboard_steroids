angular
    .module('settings')
    .controller('settingsController', function ($scope, supersonic, $resource) {

        $scope.logout = function () {
            // Close all pages
            supersonic.ui.layers.popAll();

            // Clean up apikey
            window.localStorage.removeItem('apikey');

            // Close settings drawer
            supersonic.ui.drawers.close();
        };

    });
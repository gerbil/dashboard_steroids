angular
    .module('alarms')
    .controller('alarmInfoController', function ($scope, supersonic, Alarms) {

        supersonic.ui.views.current.whenVisible(function () {
            $scope.server = steroids.view.params.server;
            $scope.id = steroids.view.params.id;
        });

        $scope.alarmInfo = Alarms.query({server: $scope.server, id: $scope.id});

    });
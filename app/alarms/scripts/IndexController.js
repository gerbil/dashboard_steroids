angular
    .module('alarms')
    .factory('Alarms', function ($resource) {
        return $resource(
            'http://10.30.60.126:3000/alarms/:server/:action/:id',
            {server: '@server'},
            {
                list: {isArray: false},
                add: {method: 'POST', params: {action: 'add'}},
                delete: {method: 'POST', params: {action: 'delete', id: '@id'}},
                update: {method: 'POST', params: {action: 'update', id: '@id'}}
            }
        );
    })
    .controller('IndexController', function ($scope, supersonic, $resource, Alarms, $interval) {
        // Controller functionality here
        $scope.huj = "OGROMNIJ HUJ";

        Alarms.list(function (data) {
            // Get all servers from backend
            $scope.serverList = data.servers;
            var getAlarmsInfo = function (server) {
                Alarms.query({server: server}, function (data) {
                    $scope.serverList[server] = data;
                });
            };
            for (var i = 0; i < $scope.serverList.length; i++) {
                getAlarmsInfo($scope.serverList[i]);
            }
        });

        function refreshData() {
            var getAlarmsInfo = function (server) {
                Alarms.query({server: server}, function (data) {
                    $scope.serverList[server] = data;
                });
            };
            for (var i = 0; i < $scope.serverList.length; i++) {
                getAlarmsInfo($scope.serverList[i]);
            }
        }

        // Promise should be created to be deleted afterwards
        var promise = $interval(refreshData, 25000);

        // Cancel interval on page changes
        $scope.$on('$destroy', function () {
            if (angular.isDefined(promise)) {
                $interval.cancel(promise);
                promise = undefined;
            }
        });
        // Data refresh end


    });

angular
    .module('alarms')
    .factory('Alarms', function ($resource) {
        return $resource(
            'http://10.30.60.165:3000/alarms/:server/:action/:id',
            {server: '@server'},
            {
                list: {method: 'GET', isArray: false},
                add: {method: 'POST', params: {action: 'add'}},
                delete: {method: 'POST', params: {action: 'delete', id: '@id'}},
                update: {method: 'POST', params: {action: 'update', id: '@id'}}
            }
        );
    })

    .controller('ServerListController', function ($scope, supersonic, $resource, Alarms) {

        // Get all servers from backend alarms factory API
        Alarms.list(function (data) {
            $scope.serverList = data.servers;

            for (var index = 0; index < $scope.serverList.length; ++index) {

                var serverView = new steroids.views.WebView({
                    location: 'app/alarms/alarmsList.html?server=' + $scope.serverList[index],
                    id: $scope.serverList[index]
                });

                serverView.preload({id: $scope.serverList[index]});
            }

        });

        $scope.openMenu = function () {
            supersonic.ui.drawers.open('left').then(function () {
                //supersonic.logger.info('Drawer was shown');
            });
        };

        $scope.openSettings = function () {
            supersonic.ui.drawers.open('right').then(function () {
                //supersonic.logger.info('Drawer was shown');
            });
        };

        $scope.openAlarmsList = function (server) {
            //var AlarmsList = new steroids.views.WebView('app/alarms/alarmsList.html?server=' + server);
            var AlarmsList = new steroids.views.WebView({
                location: 'app/alarms/alarmsList.html?server=' + server,
                id: server
            });
            steroids.layers.push({view: AlarmsList, navigationBar: false});
        };

    });
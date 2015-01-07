angular
    .module('alarms')
    .factory('Alarms', function ($resource) {
        return $resource(
            'http://10.30.60.165:3000/alarms/:server/:action/:id',
            {server: '@server'},
            {
                list: {
                    method: 'GET',
                    isArray: false
                },
                add: {
                    method: 'POST',
                    params: {action: 'add'}
                },
                delete: {
                    method: 'POST',
                    params: {action: 'delete', id: '@id'}
                },
                update: {
                    method: 'POST',
                    params: {action: 'update', id: '@id'}
                }
            }
        );
    })

    .controller('ServerListController', function ($scope, supersonic, $resource, Alarms) {

        $scope.viewTitle = 'Server list';

        steroids.on('ready', supersonic.ui.navigationBar.hide());

        // Check localStorage for apikey
        var apikey = window.localStorage.getItem('apikey');

        // Get all servers from backend alarms factory API
        Alarms.list({apikey: apikey}, function (data) {
            $scope.serverList = data.servers;
        });

        $scope.openMenu = function () {
            supersonic.ui.drawers.open('left').then(function () {
                supersonic.logger.debug('Drawer was shown');
            });
        };

        $scope.openSettings = function () {
            supersonic.ui.drawers.open('right').then(function () {
                supersonic.logger.debug('Drawer was shown');
            });
        };

        $scope.openAlarmsList = function (server) {
            var AlarmsList = new steroids.views.WebView('app/alarms/alarmsList.html?server=' + server);
            steroids.layers.push(AlarmsList);
        };

    });
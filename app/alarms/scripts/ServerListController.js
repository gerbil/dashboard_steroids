angular
    .module('alarms')
    .factory('Alarms', function ($resource) {
        return $resource(
            'http://localhost:3000/alarms/:server/:action/:id',
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

        // Get all servers from backend alarms factory API
        Alarms.list({apikey: 'asdasjsdgfjkjhg'}, function (data) {
            $scope.serverList = data.servers;
        });

        $scope.openMenu = function () {
            steroids.drawers.show();
        };

        $scope.openAlarmsList = function (server) {
            var AlarmsList = new steroids.views.WebView('app/alarms/alarmsList.html?server=' + server);
            steroids.layers.push(AlarmsList);
        };

        var webView = new steroids.views.WebView({location: "app/alarms/alarmsList.html?server=test", id: "testAlarmsView"});
        webView.preload();


    });
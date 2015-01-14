angular
    .module('alarms')
    .controller('alarmInfoController', function ($scope, supersonic, Alarms) {

        supersonic.ui.views.current.whenVisible(function () {
            $scope.server = steroids.view.params.server;
            $scope.id = steroids.view.params.id;
        });

        // Check localStorage for apikey
        var apikey = window.localStorage.getItem('apikey');

        $scope.alarmInfo = Alarms.query({server: $scope.server, id: $scope.id});

        $scope.saveAlarm = function (alarmInfo) {
            Alarms.update({apikey: apikey, server: $scope.server, id: $scope.id, envname: alarmInfo[0].ENVNAME, checkname: alarmInfo[0].CHECKNAME, description: alarmInfo[0].DESCRIPTION, status: alarmInfo[0].STATUS, curvalue: alarmInfo[0].CURVALUE, vallimit: alarmInfo[0].VALLIMIT, limitmark: alarmInfo[0].LIMITMARK, sqlscript: alarmInfo[0].SQLSCRIPT, active: alarmInfo[0].ACTIVE, sendto: alarmInfo[0].SENDTO, alarmtype: alarmInfo[0].ALARMTYPE, starttime: alarmInfo[0].START_TIME, endtime: alarmInfo[0].END_TIME},
                function () {
                    navigator.notification.alert('Updated', '', 'Success', 'ok');
                }, function (data) {
                    navigator.notification.alert('Not updated', '', 'Fail', 'ok');
                });
        };

        $scope.addAlarm = function (server, alarm) {
            Alarms.add({apikey: apikey, server: server, envname: alarm.envname, checkname: alarm.checkname, description: alarm.description, status: alarm.status, curvalue: alarm.curvalue, vallimit: alarm.vallimit, limitmark: alarm.limitmark, sqlscript: alarm.sqlscript, active: alarm.active, sendto: alarm.sendto, alarmtype: alarm.alarmtype, starttime: alarm.starttime, endtime: alarm.endtime},
                function () {
                    navigator.notification.alert('Added', '', 'Success', 'ok');
                }, function (data) {
                    navigator.notification.alert('Not added', '', 'Success', 'ok');
                });
        };

        $scope.deleteAlarm = function () {
            Alarms.delete({apikey: apikey, server: $scope.server, id: $scope.id},
                function () {
                    navigator.notification.alert('Deleted', '', 'Success', 'ok');
                }, function (data) {
                    navigator.notification.alert('Not deleted', '', 'Fail', 'ok');
                });
        };

        $scope.closeAlarm = function () {
            steroids.modal.hide();
        };

    });
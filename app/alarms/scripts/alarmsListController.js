angular
    .module('alarms')
    .controller('alarmsListController', function ($scope, supersonic, $resource, Alarms, $interval) {

        // Set server veriable from href params
        supersonic.ui.views.current.whenVisible( function(){
            $scope.server = steroids.view.params.server;
        });

        // Check localStorage for apikey
        var apikey = window.localStorage.getItem('apikey');

        // Get alarms data function from factory API
        function refreshData() {
            Alarms.query({server: $scope.server, apikey: apikey }, function (data) {
                $scope.alarmsList = data;
            });
        };

        // Self execution for data fetch
        refreshData();

        // Set interval for the refresh
        // Promise should be created to be deleted afterwards
        var promise = $interval(refreshData, 15000);

        // Cancel interval on page changes
        $scope.$on('$destroy', function () {
            if (angular.isDefined(promise)) {
                $interval.cancel(promise);
                promise = undefined;
            }
        });

        $scope.viewTitle = 'Alarms list';

        $scope.openMenu = function () {
            steroids.layers.pop();
        };

        $scope.openModal = function(id) {
            var alarmInfoView = new steroids.views.WebView('app/alarms/alarmInfo.html?server='+$scope.server+'&id='+id);
            steroids.modal.show(alarmInfoView);
        };

    });
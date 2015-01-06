angular
    .module('login')
    .factory('Login', function ($resource) {
        return $resource(
            'http://localhost:3000/login/',
            {
                getApikey: {
                    method: 'POST'
                }
            }
        )
    })
    .controller('loginController', function ($scope, supersonic, $resource, Login) {

        $scope.login = function () {
            Login.getApikey(function (data) {
                console.info($scope.data);
            });
        };

        /*
         Login.getApiKey({username: $scope.username, password: $scope.password},
         function () {
         //navigator.notification.alert('Done', '', 'Success', apikey);
         console.info(apikey);
         }, function (error) {
         //navigator.notification.alert('Not done', '', 'Fail', error);
         console.info(error);
         });*/

    });

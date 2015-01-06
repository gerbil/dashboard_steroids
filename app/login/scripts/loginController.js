angular
    .module('login')
    .factory('Login', function ($resource) {
        return $resource(
            'http://localhost:3000/login/',
            null,
            {
                getApiKey: {
                    method: 'POST'
                }
            }
        )
    })
    .controller('loginController', function ($scope, supersonic, $resource, Login) {

        $scope.login = function () {

            Login.getApiKey({username: $scope.username, password: $scope.password},
                function (data) {
                    console.info(data.apikey);
                    $scope.loginForm.username.$setValidity('', true);
                    $scope.loginForm.password.$setValidity('', true);
                },
                function () {
                   $scope.loginForm.username.$setValidity('', false);
                   $scope.loginForm.password.$setValidity('', false);
                })
        };

    });

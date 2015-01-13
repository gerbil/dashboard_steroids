angular
    .module('login')
    .factory('Login', function ($resource) {
        return $resource(
            'http://10.30.60.165:3000/login/',
            null,
            {
                getApiKey: {
                    method: 'POST'
                }
            }
        )
    })
    .controller('loginController', function ($scope, supersonic, $resource, Login) {

        // Check localStorage for apikey
        var apikey = window.localStorage.getItem('apikey');

        if (typeof(apikey) != 'undefined') {
            //var serverList = new steroids.views.WebView('app/alarms/serverList.html');
            //steroids.layers.push(serverList);
        }

        $scope.login = function () {
            /*Login.getApiKey({username: $scope.username, password: $scope.password},
             function (data) {
             // Success login, let's save apikey to localstorage
             window.localStorage.setItem('apikey', data.apikey);
             // Clean up form fields
             $scope.loginForm.username.$setValidity('', true);
             $scope.loginForm.password.$setValidity('', true);
             // Home page push
             var serverList = new steroids.views.WebView('app/alarms/serverList.html');
             steroids.layers.push(serverList);
             },
             function () {
             $scope.loginForm.username.$setValidity('', false);
             $scope.loginForm.password.$setValidity('', false);
             })*/

            // TEST PURPOSES ONLY!
            window.localStorage.setItem('apikey', 'U477y8RHQd');

            var serverList = new steroids.views.WebView({
                location: 'app/alarms/serverList.html',
                id: 'serverList'
            });

            steroids.layers.push({view: serverList, navigationBar: false});
        };


    });

//TODO - 1. Swipe gessures [SwipeDown -> refresh page content, SwipeLeft -> show option for particular row, etc]
//TODO - 2. Main menu
//TODO - 3. Settings [Profile, Logout]
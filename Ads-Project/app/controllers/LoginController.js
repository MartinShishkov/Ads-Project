(function () {
    var module = angular.module('AdsProject');

    var loginController = function ($scope, $location, Auth) {
        function attemptLogin(credentials) {
            Auth.login(credentials)
                .then(function(result) {
                $location.path("/home");
            });
        }

        function isLogged() {
            console.log(Auth.isAuthenticated());
        }

        $scope.attemptLogin = attemptLogin;

        
    }

    module.controller('loginController', loginController);
}());
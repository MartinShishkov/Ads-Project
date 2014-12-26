(function () {
    var module = angular.module('AdsProject');

    var loginController = function ($scope, Auth) {
        function attemptLogin(credentials) {
            Auth.login(credentials)
                .then(function(result) {
                    isLogged();
                });
        }

        function isLogged() {
            console.log(Auth.isAuthenticated());
        }

        $scope.attemptLogin = attemptLogin;

        
    }

    module.controller('loginController', loginController);
}());
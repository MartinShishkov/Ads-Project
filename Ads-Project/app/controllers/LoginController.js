(function () {
    var module = angular.module('AdsProject');

    var loginController = function ($scope, $rootScope, $location, Auth) {
        console.log("In login controller");

        function attemptLogin(credentials) {
            Auth.login(credentials)
                .then(function (result) {
                $rootScope.user = Auth.getUser();
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
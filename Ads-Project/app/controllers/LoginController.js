(function () {
    var module = angular.module('AdsProject');

    var loginController = function ($scope, $rootScope, $location, Auth, MessageProvider) {
        console.log("In login controller");

        function attemptLogin(credentials) {
            Auth.login(credentials)
                .then(function () {
                $rootScope.user = Auth.getUser();
                $location.path("/user/home");
            }, function(error) {
                MessageProvider.error("Invalid login.");
            });
        }

        $scope.attemptLogin = attemptLogin;
    }

    module.controller('loginController', loginController);
}());
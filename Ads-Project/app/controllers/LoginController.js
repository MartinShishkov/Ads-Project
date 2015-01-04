(function () {
    var module = angular.module('AdsProject');

    var loginController = function ($scope, $rootScope, $location, Auth, MessageProvider) {
        console.log("In login controller");

        function attemptLogin(credentials) {
            Auth.login(credentials)
                .then(function (result) {
                console.log(result);
                $rootScope.user = Auth.getUser();
                console.log($rootScope.user);
                console.log(Auth.getUser());
                $location.path("/user/home");
            }, function(error) {
                MessageProvider.error("Invalid login.");
            });
        }

        $scope.attemptLogin = attemptLogin;
    }

    module.controller('loginController', loginController);
}());
(function () {
    var module = angular.module('AdsProject');

    var loginController = function ($scope, $http, rootUrl) {
        function attemptLogin() {
            var user = {
                username: $scope.loginName,
                password: $scope.loginPassword
            }

            $http.post(rootUrl + "user/login", user)
                 .then(onSuccessfulLogin);

            function onSuccessfulLogin(result) {
                console.log(result);
            }
        }

        $scope.attemptLogin = attemptLogin;


    }

    module.controller('loginController', loginController);
}());
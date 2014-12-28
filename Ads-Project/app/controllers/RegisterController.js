(function () {
    var module = angular.module('AdsProject');

    var registerController = function ($scope, UserQueryExecutor, Auth) {

        $scope.attemptRegister = function() {
            var user = {
                username: $scope.registerUsername,
                password: $scope.registerPassword,
                confirmPassword: $scope.registerPasswordConfirm,
                name: $scope.registerName,
                email: $scope.registerEmail,
                phone: $scope.registerPhone,
                townId: null,
            }

            UserQueryExecutor.registerUser(user)
                .then(function () {
                console.log("User account created.");
            }, function(error) {
                console.log(error);
            });
        }

    }

    module.controller('registerController', registerController);
}());
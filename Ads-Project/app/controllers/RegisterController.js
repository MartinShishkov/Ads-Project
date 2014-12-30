(function () {
    var module = angular.module('AdsProject');

    var registerController = function ($scope, UserQueryExecutor, Auth, MessageProvider) {

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
                MessageProvider.success("User account created. Please login.");
            }, function(error) {
                MessageProvider.error(error.data.message);
            });
        }

    }

    module.controller('registerController', registerController);
}());
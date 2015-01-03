(function () {
    var module = angular.module('AdsProject');

    var registerController = function ($scope, $rootScope, $location, DataQueryExecutor, UserQueryExecutor, Auth, MessageProvider) {
        DataQueryExecutor.getTowns()
            .then(function (result) {
                $scope.towns = result.data;
            });
        

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
                .then(function (result) {
                    console.log(result);
                    var credentials = {
                        username: user.username,
                        password: user.password
                    };

                Auth.login(credentials)
                    .then(function() {
                        $rootScope.user = Auth.getUser();
                        $location.path("/user/home");
                    });

                MessageProvider.success("User account created. Please login.");
            }, function(error) {
                MessageProvider.error(error.data.message);
            });
        }

    }

    module.controller('registerController', registerController);
}());
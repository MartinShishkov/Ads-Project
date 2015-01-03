(function () {
    var module = angular.module('AdsProject');

    var editUserController = function ($scope, $location, DataQueryExecutor, UserQueryExecutor, MessageProvider) {
        console.log('In edit user controller.');

        DataQueryExecutor.getTowns()
            .then(function (result) {
                $scope.towns = result.data;
            });

        UserQueryExecutor.getUserProfile().then(function(result) {
            $scope.user = result.data;
        });

        $scope.attemptAccountUpdate = function() {
            var newUser = {
                name: $scope.user.name,
                email: $scope.user.email,
                phonenumber: $scope.user.phoneNumber,
                townid: $scope.user.townId
            }

            UserQueryExecutor.editUserProfile(newUser).then(function(result) {
                MessageProvider.success(result.data.message);
            }, function(error) {
                MessageProvider.error(error.message);
            });
        }

        $scope.attemptPasswordChange = function() {
            var passwordInfo = {
                oldPassword: $scope.user.oldPass,
                newPassword: $scope.user.newPass,
                confirmPassword: $scope.user.newPassConfirm
            };

            UserQueryExecutor.changePassword(passwordInfo).then(function (result) {
                MessageProvider.success(result.data.message);
            }, function (error) {
                MessageProvider.error(error.message);
            });
        }

        $scope.cancel = function() {
            $location.path('/user/home');
        }
    }

    module.controller('editUserController', editUserController);
}());
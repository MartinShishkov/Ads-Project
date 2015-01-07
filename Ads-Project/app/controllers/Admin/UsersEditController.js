(function () {
    var module = angular.module('AdsProject');

    var usersEditController = function ($scope, $location, $routeParams, AdminDataQueryExecutor, DataQueryExecutor, MessageProvider) {
        AdminDataQueryExecutor.getAllUsers().then(function (result) {
            $scope.user = result.data.users.filter(function (u) {
                return u.id == $routeParams.userId;
            })[0];
        });

        DataQueryExecutor.getTowns().then(function(result) {
            $scope.towns = result.data;
        });

        $scope.delete = function (username) {
            AdminDataQueryExecutor.deleteUser(username).then(function (result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/users/list');
            });
        }

        $scope.update = function(username, user) {
            console.log(user);
            AdminDataQueryExecutor.updateUser(username, user).then(function(result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/users/list');
            });
        }

        $scope.changePassword = function() {
            var newPass = {
                username: $scope.user.username,
                newPassword: $scope.userPassword.newPass,
                confirmPassword: $scope.userPassword.newPassConfirm
            }

            AdminDataQueryExecutor.changeUserPassword(newPass).then(function(result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/users/list');
            });
        }

        $scope.cancel = function () {
            $location.path('/admin/users/list');
        }
    }

    module.controller('usersEditController', usersEditController);
}());
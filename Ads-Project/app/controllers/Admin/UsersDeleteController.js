(function () {
    var module = angular.module('AdsProject');

    var usersDeleteController = function ($scope, $location, $routeParams, AdminDataQueryExecutor, MessageProvider) {
        AdminDataQueryExecutor.getAllUsers().then(function(result) {
            $scope.user = result.data.users.filter(function(u) {
                return u.id == $routeParams.userId;
            })[0];
        });

        $scope.delete = function(username) {
            AdminDataQueryExecutor.deleteUser(username).then(function(result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/users/list');
            });
        }

        $scope.cancel = function () {
            $location.path('/admin/users/list');
        }
    }

    module.controller('usersDeleteController', usersDeleteController);
}());
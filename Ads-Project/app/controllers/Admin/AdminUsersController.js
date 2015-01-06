(function () {
    var module = angular.module('AdsProject');

    var adminUsersController = function ($scope, $location, AdminDataQueryExecutor) {
        console.log("In admin users controller.");

        AdminDataQueryExecutor.getAllUsers().then(function(result) {
            $scope.users = result.data.users;
            console.log(result);
        });
    }

    module.controller('adminUsersController', adminUsersController);
}());
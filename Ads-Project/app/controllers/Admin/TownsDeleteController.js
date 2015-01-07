(function () {
    var module = angular.module('AdsProject');

    var townsDeleteController = function ($scope, $location, $routeParams, AdminDataQueryExecutor, MessageProvider) {
        AdminDataQueryExecutor.getAllTowns().then(function (result) {
            $scope.town = result.data.towns.filter(function (t) {
                return t.id == $routeParams.townId;
            })[0];
        });


        $scope.delete = function () {
            AdminDataQueryExecutor.deleteTown($routeParams.townId).then(function (result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/towns/list');
            }, function (error) {
                MessageProvider.error(error.message);
            });

        }

        $scope.cancel = function () {
            $location.path('/admin/towns/list');
        }
    }

    module.controller('townsDeleteController', townsDeleteController);
}());
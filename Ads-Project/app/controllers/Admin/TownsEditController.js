(function () {
    var module = angular.module('AdsProject');

    var townsEditController = function ($scope, $location, $routeParams, AdminDataQueryExecutor, MessageProvider) {
        AdminDataQueryExecutor.getAllTowns().then(function (result) {
            $scope.town = result.data.towns.filter(function (t) {
                return t.id == $routeParams.townId;
            })[0];
        });

        $scope.edit = function () {
            var town = {
                name: $scope.town.username
            }

            AdminDataQueryExecutor.editTown($routeParams.townId, town).then(function (result) {
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

    module.controller('townsEditController', townsEditController);
}());
(function () {
    var module = angular.module('AdsProject');

    var townsCreateController = function ($scope, $location, AdminDataQueryExecutor, MessageProvider) {
        $scope.create = function () {
            var town = {
                name: $scope.town
            }

            AdminDataQueryExecutor.createTown(town).then(function (result) {
                console.log(result);
                MessageProvider.success(result.data.message);
                $location.path('/admin/towns/list');
            });
        }

        $scope.cancel = function () {
            $location.path('/admin/towns/list');
        }
    }

    module.controller('townsCreateController', townsCreateController);
}());
(function () {
    var module = angular.module('AdsProject');

    var adminDeleteAdController = function ($scope, $routeParams, $location, AdminDataQueryExecutor, MessageProvider) {
        AdminDataQueryExecutor.getAdById($routeParams.adId).then(function(result) {
            $scope.ad = result.data;
            console.log($scope.ad);
        });

        $scope.deleteAd = function(id) {
            AdminDataQueryExecutor.deleteAdById(id).then(function(result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/home');
            });
        }

        $scope.cancel = function() {
            $location.path('/admin/home');
        }
    }

    module.controller('adminDeleteAdController', adminDeleteAdController);
}());
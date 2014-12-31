(function () {
    var module = angular.module('AdsProject');

    var deleteAdController = function ($scope, $location, $routeParams, DataQueryExecutor, MessageProvider) {
        console.log("In delete ad controller.");

        DataQueryExecutor.getAdById(Number($routeParams.adId))
            .then(function(result) {
                $scope.ad = result.data;
        }, function(error) {
            console.log(error);
        });


        $scope.deleteAd = function(id) {
            DataQueryExecutor.deleteAd(id)
                .then(function(result) {
                    MessageProvider.success('Advertisement deleted successfully.');
                $location.path("/user/ads");
            }, function(error) {

                MessageProvider.error(error.data.message);
            });
        }
    }

    module.controller('deleteAdController', deleteAdController);
}());
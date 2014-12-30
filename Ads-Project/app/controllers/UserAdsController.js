(function () {
    var module = angular.module('AdsProject');

    var userAdsController = function ($scope, $rootScope, DataQueryExecutor, MessageProvider) {
        console.log("In user ads controller.");

        DataQueryExecutor.getUserAds()
            .then(function(result) {
            loadUserAds(result);
        });

        function loadUserAds(result) {
            $scope.userAds = result.data.ads;
            console.log($scope.userAds);
        }

        $scope.deactivateAd = function(id) {
            DataQueryExecutor.deactivateAd(id)
                .then(function (result) {
                MessageProvider.success("Ad deactivated successfully.");
                console.log(result);
            }, function(error) {
                MessageProvider.error(error.data.message);
            });

        }
    }

    module.controller('userAdsController', userAdsController);
}());
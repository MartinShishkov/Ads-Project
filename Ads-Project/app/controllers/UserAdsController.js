(function () {
    var module = angular.module('AdsProject');

    var userAdsController = function ($scope, $rootScope, DataQueryExecutor) {
        console.log("In user ads controller.");

        DataQueryExecutor.getUserAds()
            .then(function(result) {
            loadUserAds(result);
        });

        function loadUserAds(result) {
            $scope.userAds = result.data.ads;
        }

    }

    module.controller('userAdsController', userAdsController);
}());
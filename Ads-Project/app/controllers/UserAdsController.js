(function () {
    var module = angular.module('AdsProject');

    var userAdsController = function ($scope, $rootScope, DataQueryExecutor) {
        console.log("In user ads controller.");
        console.log("Token: " + $rootScope.user.access_token);

        DataQueryExecutor.getUserAds($rootScope.user.access_token)
            .then(function(result) {
            loadUserAds(result);
        });

        function loadUserAds(result) {
            $scope.userAds = result.data;
        }

    }

    module.controller('userAdsController', userAdsController);
}());
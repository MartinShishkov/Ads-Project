(function () {
    var module = angular.module('AdsProject');

    var userAdsController = function($scope, $rootScope, $location, DataQueryExecutor, MessageProvider) {
        console.log("In user ads controller.");

        $scope.adsFilters = [
            {
                title: "All",
                filter: ""
            },
            {
                title: "Published",
                filter: "Published"
            },
            {
                title: "Waiting Approval",
                filter: "WaitingApproval"
            },
            {
                title: "Inactive",
                filter: "Inactive"
            }
        ];

        $scope.activeAdFilter = $scope.adsFilters[0];

        updateAds();

        function loadUserAds(result) {
            $scope.userAds = result.data.ads;
        }

        function updateAds() {
            DataQueryExecutor.getUserAds()
            .then(function (result) {
                loadUserAds(result);
            });
        }

        $scope.goToDeleteAd = function (id) {
            $location.path('/user/ads/delete/' + id);
        }

        $scope.deactivateAd = function(id) {
            DataQueryExecutor.deactivateAd(id)
                .then(function (result) {
                    MessageProvider.success("Ad deactivated successfully.");
                    updateAds();
            }, function(error) {
                MessageProvider.error(error.data.message);
            });
        }

        $scope.publishAgainAd = function(id) {
            DataQueryExecutor.publishAgain(id)
                .then(function(result) {
                    MessageProvider.success("Ad published again successfully.");
                    updateAds();
            }, function(error) {
                MessageProvider.error(error.data.message);
            });
        }

        $scope.isActiveFilter = function (filterTitle) {
            return filterTitle == $scope.activeAdFilter.title;
        }

        $scope.filterAdsBy = function (filter) {
            $scope.activeAdFilter = filter;
        }

        $scope.editAd = function(adId) {
            $location.path("/user/ads/edit/" + adId);
        }

    }

    module.controller('userAdsController', userAdsController);
}());
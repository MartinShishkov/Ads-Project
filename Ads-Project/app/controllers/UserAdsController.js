(function () {
    var module = angular.module('AdsProject');

    var userAdsController = function ($scope, $rootScope, DataQueryExecutor, MessageProvider) {
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
            }, function(error) {
                MessageProvider.error(error.data.message);
            });

        }

        $scope.isActiveFilter = function (filterTitle) {
            return filterTitle == $scope.activeAdFilter.title;
        }

        $scope.filterAdsBy = function (filter) {
            console.log(filter);
            $scope.activeAdFilter = filter;
        }


    }

    module.controller('userAdsController', userAdsController);
}());
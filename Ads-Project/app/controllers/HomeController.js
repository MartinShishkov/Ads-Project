(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function($scope, DataQueryExecutor, Auth) {
        var pageSize = 2;
        var startPage = 1;

        DataQueryExecutor.getAds(pageSize, startPage).then(onAdsLoad);

        DataQueryExecutor.getCategories().then(onCategoriesLoad);

        DataQueryExecutor.getTowns().then(onTownsLoad);

        function onAdsLoad(result) {
            $scope.ads = result.data.ads;
        };

        function onCategoriesLoad(result) {
            $scope.categories = result.data;
        }

        function onTownsLoad(result) {
            $scope.towns = result.data;
        }

        (function() {
            console.log("Is logged: " + Auth.isAuthenticated());
        }());
    }

    module.controller('homeController', homeController);
}());
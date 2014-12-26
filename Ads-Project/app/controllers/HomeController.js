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

        //var selectCategory = function (category, event) {
        //    console.log(category);
        //    console.log(event.target);
        //    $(event.target.parent()).attr('background-color', '#ffbf26');
        //}

        //$scope.selectCategory = selectCategory;
    }

    module.controller('homeController', homeController);
}());
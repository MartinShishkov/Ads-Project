(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function($scope, DataQueryExecutor) {
        var pageSize = 2;
        var startPage = 1;

        $scope.activePage = startPage;

        DataQueryExecutor.getAds(pageSize, startPage).then(onAdsLoad);

        DataQueryExecutor.getCategories().then(onCategoriesLoad);

        DataQueryExecutor.getTowns().then(onTownsLoad);

        function onAdsLoad(result) {
            $scope.ads = result.data.ads;
            $scope.pages = loadPages(result.data.numPages);
        };

        function loadPages(numPages) {
            var pages = [];
            for (var i = 0; i < numPages; i++) {
                pages[i] = {
                    title: (i + 1).toString(),
                    pageNumber: i + 1
                };
            }
            return pages;
        }

        function onCategoriesLoad(result) {
            $scope.categories = result.data;
        }

        function onTownsLoad(result) {
            $scope.towns = result.data;
        }

        // Pagination logic
        $scope.goToPage = function(pageNumber) {
            $scope.activePage = pageNumber;
            DataQueryExecutor.getAds(pageSize, pageNumber).then(onAdsLoad);
        }

        $scope.isActivePage = function (pageNumber) {
            return $scope.activePage == pageNumber;
        }

        $scope.goToFirstPage = function() {
            $scope.activePage = 1;
            $scope.goToPage($scope.activePage);
        }

        $scope.goToLastPage = function () {
            $scope.activePage = $scope.pages.length;
            $scope.goToPage($scope.activePage);
        }

        $scope.onePageBack = function() {
            if ($scope.activePage > 1) {
                $scope.activePage--;
                $scope.goToPage($scope.activePage);
            }
        }

        $scope.onePageForward = function () {
            if ($scope.activePage < $scope.pages.length) {
                $scope.activePage++;
                $scope.goToPage($scope.activePage);
            }
        }
        //////////////////////////////////////////////
    }

    module.controller('homeController', homeController);
}());
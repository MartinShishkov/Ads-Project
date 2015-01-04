(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function ($scope, DataQueryExecutor) {
        var pageSize = 2;
        //var pageSize = 1;
        var startPage = 1;
        var displayPages = 4;

        $scope.activePage = startPage;

        DataQueryExecutor.getAds(pageSize, startPage).then(onAdsLoad);

        DataQueryExecutor.getCategories().then(onCategoriesLoad);

        DataQueryExecutor.getTowns().then(onTownsLoad);

        function onAdsLoad(result) {
            $scope.ads = result.data.ads;
            $scope.allPages = result.data.numPages;
            //$scope.pages = loadPages(result.data.numPages);

            // getting the new set of pages and removing
            // the undefined elements from the array
            $scope.pages = loadPages(displayPages)
                                    .filter(function (obj) {
                                        return obj != undefined;
                                    });
        };

        function onCategoriesLoad(result) {
            $scope.categories = result.data;
        }

        function onTownsLoad(result) {
            $scope.towns = result.data;
        }


        // ======================= Pagination Logic =================================

        // if problems with undefined values in the array occur
        // use .. track by $index in the ng-repeat directive of the <li> items
        // Ex.: ng-repeat="page in pages track by $index"
        function loadPages(numPages) {
            var pages = [];

            var newPages = numPages + ($scope.activePage - 1);
            if (newPages > $scope.allPages) {
                newPages = $scope.allPages;
            }

            for (var i = $scope.activePage - 1; i < newPages; i++) {

                pages[i] = {
                    title: (i + 1).toString(),
                    pageNumber: i + 1
                };
            }
            return pages;
        }
        
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
            $scope.activePage = $scope.allPages;
            $scope.goToPage($scope.activePage);
        }

        $scope.onePageBack = function() {
            if ($scope.activePage > 1) {
                $scope.activePage--;
                $scope.goToPage($scope.activePage);
            }
        }

        $scope.onePageForward = function () {
            if ($scope.activePage < $scope.allPages) {
                $scope.activePage++;
                $scope.goToPage($scope.activePage);
            }
        }
        //////////////////////////////////////////////
    }

    module.controller('homeController', homeController);
}());
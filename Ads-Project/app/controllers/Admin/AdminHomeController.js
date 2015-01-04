(function () {
    var module = angular.module('AdsProject');

    var adminHomeController = function ($scope, AdminDataQueryExecutor) {
        console.log("In admin home controller");

        var pageSize = 2;
        var startPage = 1;
        var displayPages = 4;

        $scope.activePage = startPage;

        AdminDataQueryExecutor.getAds(pageSize, startPage, null).then(onAdsLoad);

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


        //////////////////////////////////
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

        $scope.goToPage = function (pageNumber) {
            $scope.activePage = pageNumber;
            AdminDataQueryExecutor.getAds(pageSize, pageNumber, null).then(onAdsLoad);
        }

        $scope.isActivePage = function (pageNumber) {
            return $scope.activePage == pageNumber;
        }

        $scope.goToFirstPage = function () {
            $scope.activePage = 1;
            $scope.goToPage($scope.activePage);
        }

        $scope.goToLastPage = function () {
            $scope.activePage = $scope.allPages;
            $scope.goToPage($scope.activePage);
        }

        $scope.onePageBack = function () {
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
    }

    module.controller('adminHomeController', adminHomeController);
}());
﻿(function () {
    var module = angular.module('AdsProject');

    var adminHomeController = function ($scope, $location, AdminDataQueryExecutor, DataQueryExecutor, MessageProvider) {
        console.log("In admin home controller");
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

        var pageSize = 1;
        var startPage = 1;
        var displayPages = 4;

        $scope.activePage = startPage;
        $scope.activeStatus = $scope.adsFilters[0];
        $scope.activeTown = "";
        $scope.activeCategory = "";

        DataQueryExecutor.getCategories().then(function(result) {
            $scope.categories = result.data;
        });

        DataQueryExecutor.getTowns().then(function (result) {
            $scope.towns = result.data;
        });

        

        $scope.isActiveStatus = function(filterTitle) {
            //return $scope.activeStatus.title == filterTitle;
            return filterTitle === $scope.activeStatus.title;
        }

        $scope.isActiveCategory = function (id) {
            return $scope.activeCategory == id;
        }

        $scope.isActiveTown = function (id) {
            return $scope.activeTown == id;
        }

        $scope.filterByCategory = function(id) {
            $scope.activeCategory = id;

            updateAds(pageSize, startPage, $scope.activeStatus.filter, $scope.activeTown, $scope.activeCategory);
        }

        $scope.filterByTown = function (id) {
            $scope.activeTown = id;

            updateAds(pageSize, startPage, $scope.activeStatus.filter, $scope.activeTown, $scope.activeCategory);
        }

        $scope.filterByStatus = function (filter) {
            $scope.activeStatus = filter;

            updateAds(pageSize, startPage, $scope.activeStatus.filter, $scope.activeTown, $scope.activeCategory);
        }

        function updateAds(pageSizeParam, startPageParam, status, townId, categoryId) {
            AdminDataQueryExecutor.getAdsByAllFilters(pageSizeParam, startPageParam, status, townId, categoryId)
                                  .then(onAdsLoad);
        }

        //AdminDataQueryExecutor.getAds(pageSize, startPage, null).then(onAdsLoad);
        updateAds(pageSize, startPage, $scope.activeStatus.filter, $scope.activeTown, $scope.activeCategory);

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
            updateAds(pageSize, pageNumber, $scope.activeStatus.filter, $scope.activeTown, $scope.activeCategory);
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


        //////////////////////////////////
        $scope.approveAd = function (id) {
            AdminDataQueryExecutor.approveAd(id).then(function(result) {
                $scope.goToFirstPage();
                MessageProvider.success(result.data.message);
            }, function(error) {
                MessageProvider.error(error.data.message);
            });
        }

        $scope.deleteAd = function(id) {
            $location.path("/admin/ads/delete/" + id);
        }
    }

    module.controller('adminHomeController', adminHomeController);
}());
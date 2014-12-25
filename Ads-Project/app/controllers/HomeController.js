(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function($scope, $http, rootUrl) {
        var pageSize = 2;
        var startPage = 1;

        // getting all ads
        $http.get(rootUrl + "ads?pagesize=" + pageSize + "&startpage=" + startPage)
             .then(onAdsLoad);

        // getting all categories
        $http.get(rootUrl + "categories")
             .then(onCategoriesLoad);

        // getting all towns
        $http.get(rootUrl + "towns")
             .then(onTownsLoad);

        function onAdsLoad(result) {
            $scope.ads = result.data.ads;
        };

        function onCategoriesLoad(result) {
            $scope.categories = result.data;
        }

        function onTownsLoad(result) {
            $scope.towns = result.data;
        }

        //var selectCategory = function (category, event) {
        //    console.log(category);
        //    console.log(event.target);
        //    $(event.target.parent()).attr('background-color', '#ffbf26');
        //}

        //$scope.selectCategory = selectCategory;
    }

    module.controller('homeController', homeController);
}());
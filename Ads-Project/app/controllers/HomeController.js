(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function($scope, $http, rootUrl) {
        console.log("In home controller");
        console.log(rootUrl);

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
            console.log(result);
            $scope.towns = result.data;
        }
    }

    module.controller('homeController', homeController);
}());
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


        function onAdsLoad(result) {
            $scope.ads = result.data.ads;
        };

        function onCategoriesLoad(result) {
            $scope.categories = result.data;
        }
    }

    module.controller('homeController', homeController);
}());
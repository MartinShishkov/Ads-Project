(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function($scope, $http, rootUrl) {
        console.log("In home controller");
        console.log(rootUrl);

        $http.get(rootUrl + "ads")
             .then(onAdsLoad);


        function onAdsLoad(result) {
            $scope.ads = result.data.ads;

        };

    }

    module.controller('homeController', homeController);
}());
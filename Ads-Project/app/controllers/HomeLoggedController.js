(function () {
    var module = angular.module('AdsProject');

    var homeLoggedController = function ($scope, $location, Auth) {
        (function() {
            console.log("In home logged controller.");
        }());

        $scope.user = Auth.getUser();

        $scope.isActiveTab = function (path) {
            return path === $location.path();
        }
    }

    module.controller('homeLoggedController', homeLoggedController);
}());
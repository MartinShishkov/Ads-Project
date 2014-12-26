(function () {
    var module = angular.module('AdsProject');

    var homeLoggedController = function ($scope, Auth) {
        (function() {
            console.log("In home logged controller.");
        }());

        $scope.user = Auth.getUser();
    }

    module.controller('homeLoggedController', homeLoggedController);
}());
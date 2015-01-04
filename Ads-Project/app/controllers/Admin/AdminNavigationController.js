(function () {
    var module = angular.module('AdsProject');

    var adminNavigationController = function ($scope, $location) {
        $scope.isActiveTab = function (path) {
            return path === $location.path();
        }
    }

    module.controller('adminNavigationController', adminNavigationController);
}());
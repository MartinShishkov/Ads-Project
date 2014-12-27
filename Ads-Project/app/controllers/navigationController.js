(function () {
    var module = angular.module('AdsProject');

    var navigationController = function ($scope, $location) {
        $scope.isActiveTab = function (path) {
            return path === $location.path();
        }
    }

    module.controller('navigationController', navigationController);
}());
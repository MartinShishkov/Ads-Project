(function () {
    var module = angular.module('AdsProject');

    var townsEditController = function ($scope, $location, AdminDataQueryExecutor, MessageProvider) {
        console.log("In admin edit towns controller.");


        $scope.cancel = function () {
            $location.path('/admin/towns/list');
        }
    }

    module.controller('townsEditController', townsEditController);
}());
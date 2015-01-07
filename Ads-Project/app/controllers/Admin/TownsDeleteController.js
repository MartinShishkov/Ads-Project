(function () {
    var module = angular.module('AdsProject');

    var townsDeleteController = function ($scope, $location, AdminDataQueryExecutor, MessageProvider) {
        console.log("In admin delete towns controller.");


        $scope.cancel = function () {
            $location.path('/admin/towns/list');
        }
    }

    module.controller('townsDeleteController', townsDeleteController);
}());
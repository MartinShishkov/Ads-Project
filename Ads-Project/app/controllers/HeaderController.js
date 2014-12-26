(function () {
    var module = angular.module('AdsProject');

    var headerController = function ($scope, $rootScope, Auth) {
        $rootScope.user = Auth.getUser();

        $scope.logout = Auth.logout;
    }

    module.controller('headerController', headerController);
}());
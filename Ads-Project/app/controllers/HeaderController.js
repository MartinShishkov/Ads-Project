(function () {
    var module = angular.module('AdsProject');

    var headerController = function ($scope, Auth) {
        // gets the user from the $rootScope
        // and displays his name in the header

        // logout functionality for the button
        $scope.logout = Auth.logout;
    }

    module.controller('headerController', headerController);
}());
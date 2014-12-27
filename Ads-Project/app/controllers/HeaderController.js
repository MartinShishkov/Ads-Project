(function () {
    var module = angular.module('AdsProject');

    var headerController = function ($scope, $location, Auth) {
        // gets the user from the $rootScope
        // and displays his name in the header

        // logout functionality for the button
        $scope.logout = Auth.logout;

        switch ($location.path()) {
            case '/':
                $scope.currentPage = "Home";
                break;
            case '/login':
                $scope.currentPage = "Login";
                break;
            case '/register':
                $scope.currentPage = "Registration";
                break;
            case '/home':
                $scope.currentPage = "Home";
                break;
            default:
                break;
        }
    }

    module.controller('headerController', headerController);
}());
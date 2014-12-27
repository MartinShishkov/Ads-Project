(function () {
    var module = angular.module('AdsProject');

    var headerController = function ($scope, $rootScope, $location, Auth) {
        // gets the user from the $rootScope
        // and displays his name in the header

        // logout functionality for the button
        $scope.logout = Auth.logout;

        $rootScope.$on('$routeChangeSuccess', function() {
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
                case '/user/home':
                    $scope.currentPage = "Home";
                    break;
                case '/user/ads':
                    $scope.currentPage = "My Ads";
                    break;
                case '/user/ads/publish':
                    $scope.currentPage = "Publish New Ad";
                    break;
                case '/user/profile':
                    $scope.currentPage = "Edit User Profile";
                    break;
                default:
                    break;
            }
        });

        
    }

    module.controller('headerController', headerController);
}());
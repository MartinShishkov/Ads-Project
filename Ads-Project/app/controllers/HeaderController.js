(function () {
    var module = angular.module('AdsProject');

    var headerController = function ($scope, $rootScope, $location, $routeParams, Auth) {
        // gets the user from the $rootScope
        // and displays his name in the header

        // logout functionality for the button
        $scope.logout = Auth.logout;
        $scope.isUserAdministrator = function () {
            console.log($rootScope.isUserAdministrator);
            return $rootScope.isUserAdministrator;
        };
        $rootScope.user = Auth.getUser();

        $rootScope.$on('$routeChangeSuccess', function() {
            switch ($location.path()) {
                case '/':
                    $scope.currentPage = "Ads - Home";
                    break;
                case '/login':
                    $scope.currentPage = "Ads - Login";
                    break;
                case '/register':
                    $scope.currentPage = "Ads - Registration";
                    break;
                case '/user/home':
                    $scope.currentPage = "Ads - Home";
                    break;
                case '/user/ads':
                    $scope.currentPage = "Ads - My Ads";
                    break;
                case '/user/ads/publish':
                    $scope.currentPage = "Ads - Publish New Ad";
                    break;
                case '/user/profile':
                    $scope.currentPage = "Ads - Edit User Profile";
                    break;
                case '/user/ads/delete/' + $routeParams.adId:
                    $scope.currentPage = "Ads - Delete Ad";
                    break;
                case '/user/ads/edit/' + $routeParams.adId:
                    $scope.currentPage = "Ads - Edit Ad";
                    break;
                case '/admin/home':
                    $scope.currentPage = "Ads Administration - Ads";
                    break;
                case '/admin/users/list':
                    $scope.currentPage = "Ads Administration - Users";
                    break;
                case '/admin/categories/list':
                    $scope.currentPage = "Ads Administration - Categories";
                    break;
                case '/admin/categories/edit/' + $routeParams.categoryId:
                    $scope.currentPage = "Ads Administration - Edit Category";
                    break;
                case '/admin/categories/delete/' +$routeParams.categoryId:
                    $scope.currentPage = "Ads Administration - Delete Category";
                    break;
                case '/admin/categories/create':
                    $scope.currentPage = "Ads Administration - Create Category";
                    break;
                case '/admin/towns/list':
                    $scope.currentPage = "Ads Administration - Towns";
                    break;
                case '/admin/ads/delete/' + $routeParams.adId:
                    $scope.currentPage = "Ads Administration – Delete Ad";
                    break;

                default:
                    break;
            }
        });
    }

    module.controller('headerController', headerController);
}());
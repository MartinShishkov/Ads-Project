(function () {
    var module = angular.module('AdsProject');

    var adminCategoriesController = function ($scope, $location, AdminDataQueryExecutor) {
        console.log("In admin categories controller.");

        AdminDataQueryExecutor.getAllCategories().then(function(result) {
            $scope.categories = result.data.categories;
        });

        $scope.create = function () {
            $location.path('/admin/categories/create');
        }

        $scope.delete = function (id) {
            
        }
    }

    

    module.controller('adminCategoriesController', adminCategoriesController);
}());
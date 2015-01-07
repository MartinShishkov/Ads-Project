(function () {
    var module = angular.module('AdsProject');

    var categoriesDeleteController = function ($scope, $location, $routeParams, AdminDataQueryExecutor, MessageProvider) {
        console.log("In admin delete categories controller.");

        AdminDataQueryExecutor.getAllCategories().then(function(result) {
            $scope.category = result.data.categories.filter(function(c) {
                return c.id == $routeParams.categoryId;
            })[0];
        });


        $scope.delete = function() {
            AdminDataQueryExecutor.deleteCategory($routeParams.categoryId).then(function(result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/categories/list');
            }, function(error) {
                MessageProvider.error(error.message);
            });

        }

        $scope.cancel = function () {
            $location.path('/admin/categories/list');
        }
    }



    module.controller('categoriesDeleteController', categoriesDeleteController);
}());
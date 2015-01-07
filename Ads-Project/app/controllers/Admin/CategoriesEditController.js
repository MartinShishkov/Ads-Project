(function () {
    var module = angular.module('AdsProject');

    var categoriesEditController = function ($scope, $location, $routeParams, AdminDataQueryExecutor, MessageProvider) {
        AdminDataQueryExecutor.getAllCategories().then(function (result) {
            $scope.category = result.data.categories.filter(function (c) {
                return c.id == $routeParams.categoryId;
            })[0];
        });


        $scope.edit = function () {
            var category = {
                name: $scope.category.username
            }

            AdminDataQueryExecutor.editCategory($routeParams.categoryId, category).then(function (result) {
                MessageProvider.success(result.data.message);
                $location.path('/admin/categories/list');
            }, function (error) {
                MessageProvider.error(error.message);
            });

        }

        $scope.cancel = function () {
            $location.path('/admin/categories/list');
        }
    }



    module.controller('categoriesEditController', categoriesEditController);
}());
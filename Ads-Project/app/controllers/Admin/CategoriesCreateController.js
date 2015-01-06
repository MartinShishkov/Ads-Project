(function () {
    var module = angular.module('AdsProject');

    var categoriesCreateController = function ($scope, $location, AdminDataQueryExecutor, MessageProvider) {
        console.log("In admin create categories controller.");

        $scope.create = function () {
            var category = {
                name: $scope.category
            }

            AdminDataQueryExecutor.createCategory(category).then(function(result) {
                console.log(result);
                MessageProvider.success(result.data.message);
                $location.path('/admin/categories/list');
            });
        }

        $scope.cancel = function() {
            $location.path('/admin/categories/list');
        }
    }



    module.controller('categoriesCreateController', categoriesCreateController);
}());
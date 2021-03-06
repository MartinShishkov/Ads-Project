﻿(function () {
    var module = angular.module('AdsProject');

    var adminTownsController = function ($scope, $location, AdminDataQueryExecutor) {
        console.log("In admin towns controller.");

        AdminDataQueryExecutor.getAllTowns().then(function(result) {
            $scope.towns = result.data.towns;
        });

        $scope.create = function() {
            $location.path("/admin/towns/create");
        }
    }

    module.controller('adminTownsController', adminTownsController);
}());
(function () {
    var module = angular.module('AdsProject');

    var registerController = function () {
        console.log("In register controller");
    }

    module.controller('registerController', registerController);
}());
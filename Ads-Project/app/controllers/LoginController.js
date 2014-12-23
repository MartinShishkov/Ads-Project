(function () {
    var module = angular.module('AdsProject');

    var loginController = function () {
        console.log("In login controller");
    }

    module.controller('loginController', loginController);
}());
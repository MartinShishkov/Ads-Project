(function() {
    var module = angular.module('AdsProject');

    var homeController = function() {
        console.log("In home controller");
    }

    module.controller('homeController', homeController);
}());
(function () {
    // a reference to the application
    var module = angular.module('AdsProject');

    var homeController = function() {
        console.log("In home controller");
    }

    module.controller('homeController', homeController);
}());
(function () {
    var module = angular.module('AdsProject');

    var userAdsController = function () {
        console.log("In user ads controller.");
    }

    module.controller('userAdsController', userAdsController);
}());
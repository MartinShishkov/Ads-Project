/// <reference path="C:\Users\Martin\Documents\Ads-Project\Ads-Project\index.html" />
(function() {
    var app = angular.module('AdsProject', ["ngRoute"]);
    console.log("Success: App created.");

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./views/main.html",
                controller: "homeController"
            })
            .otherwise({redirectTo: "/"});

    });

}());

﻿(function () {
    // defining the app with a dependency on ngRoute
    var app = angular.module('AdsProject', ["ngRoute"]);

    // defining the root url for the services
    // to use across all controllers
    app.value("rootUrl", "http://localhost:1337/api/");
    console.log("Success: App created.");

    app.config(function ($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "./views/main.html",
                controller: "homeController"
            })
            .when("/login", {
                templateUrl: "./views/login.html",
                controller: "loginController"
            })
            .when('/register', {
                templateUrl: "./views/register.html",
                controller: "registerController"
            })
            .otherwise({redirectTo: "/"});
    });
}());

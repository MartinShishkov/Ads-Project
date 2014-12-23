(function() {
    var app = angular.module('AdsProject', ["ngRoute"]);
    console.log("Success: App created.");

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./views/main.html",
                controller: "homeController"
            })
            .when("/login", {
                templateUrl: "./views/login.html",
                controller: "loginController"
            })
            .otherwise({redirectTo: "/"});

    });

}());

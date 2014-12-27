(function () {
    // defining the app with a dependency on ngRoute
    var app = angular.module('AdsProject', ["ngRoute"]);

    // defining the root url for the services
    // to use across all controllers
    app.value("rootUrl", "http://localhost:1337/api/");

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
            .when('/home', {
                templateUrl: "./views/main-logged-in.html",
                controller: "homeLoggedController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/userprofile', {
                templateUrl: "./views/edit-user-profile.html",
                controller: "editUserController",
                resolve: { loginRequired: loginRequired }
            })
            .otherwise({redirectTo: "/"});
    });

    var loginRequired = function($location, $q, Auth) {
        var deferred = $q.defer();

        if (Auth.isAuthenticated() == false) {
            deferred.reject();
            $location.path('/login');
        }

    }
}());

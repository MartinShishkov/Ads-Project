(function () {
    // defining the app with a dependency on ngRoute
    var app = angular.module('AdsProject', ["ngRoute", "ngCookies"]);

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
            .when('/user/home', {
                templateUrl: "./views/main.html",
                controller: "homeController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/user/ads', {
                templateUrl: "./views/user-ads.html",
                controller: "userAdsController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/user/ads/publish', {
                templateUrl: "./views/user-ads-publish.html",
                controller: "userAdsPublishController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/user/profile', {
                templateUrl: "./views/edit-user-profile.html",
                controller: "editUserController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/user/ads/delete/:adId', {
                templateUrl: "./views/delete-ad.html",
                controller: "deleteAdController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/user/ads/edit/:adId', {
                templateUrl: "./views/edit-ad.html",
                controller: "editAdController",
                resolve: { loginRequired: loginRequired }
            })
            .when('/admin/home', {
                templateUrl: "./views/Admin/admin-home.html",
                controller: "adminHomeController",
                resolve: { adminRequired: adminRequired }
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

    var adminRequired = function ($location, $q, Auth) {
        loginRequired($location, $q, Auth);

        var deferred = $q.defer();

        if (Auth.isAdmin() == false) {
            deferred.reject();
            $location.path('/user/home');
        }
    }

    var isAdmin = function(Auth) {
        return Auth.isAdmin();
    }

}());

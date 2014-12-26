(function() {
    var module = angular.module('AdsProject');

    var Auth = function ($http, Session, rootUrl) {

        var login = function (credentials) {
            var user = {
                username: credentials.username,
                password: credentials.password
            }

            return $http.post(rootUrl + "user/login", user)
                        .then(function (result) {
                            Session.create(result.data);
                            return result;
                        });
        }

        var logout = function() {
            Session.destroy();
        }

        var isAuthenticated = function() {
            return !!Session.user;
        }

        var getUser = function() {
            return Session.getUser();
        }

        return {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getUser: getUser
        };
    }

    module.factory('Auth', Auth);
}());
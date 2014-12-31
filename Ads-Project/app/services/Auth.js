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
            return !!Session.getUser();
        }

        var getUser = function () {
            return Session.getUser();
        }

        var isAdmin = function () {
            if (Session.getUser()) {
                return !!Boolean(Session.getUser().isAdmin);
            }

            return false;
        }

        return {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getUser: getUser,
            isAdmin: isAdmin
        };
    }

    module.factory('Auth', Auth);
}());
(function() {
    var module = angular.module('AdsProject');

    var Session = function ($rootScope) {
        // 'this' is the whole Session function
        // $rootScope.user is required because of the header
        // in the static part of the application

        var create = function (user) {
            this.user = user;
            $rootScope.user = user;
            sessionStorage.setItem('user', user);
        };

        var destroy = function() {
            this.user = null;
            sessionStorage.removeItem('user');
            $rootScope.user = null;
        };

        var getUser = function() {
            return this.user;
        }

        return {
            create: create,
            destroy: destroy,
            getUser: getUser
        };
    }

    module.factory('Session', Session);
}());
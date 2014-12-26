(function() {
    var module = angular.module('AdsProject');

    var Session = function () {
        // 'this' is the whole Session function

        var create = function (user) {
            this.user = user;
        };

        var destroy = function() {
            this.user = null;
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
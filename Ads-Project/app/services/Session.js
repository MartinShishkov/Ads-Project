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

        return {
            create: create,
            destroy: destroy
        };
    }

    module.factory('Session', Session);
}());
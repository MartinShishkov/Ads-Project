(function() {
    var module = angular.module('AdsProject');

    var Session = function ($cookieStore) {
        // 'this' is the whole Session function
        // $rootScope.user is required because of the header
        // in the static part of the application

        var create = function (user) {
            $cookieStore.put('user', user);
            console.log($cookieStore.get('user'));
        };

        var destroy = function() {
            $cookieStore.remove('user');
        };

        var getUser = function() {
            return $cookieStore.get('user');
        }

        return {
            create: create,
            destroy: destroy,
            getUser: getUser
        };
    }

    module.factory('Session', Session);
}());
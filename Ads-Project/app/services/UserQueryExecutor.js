(function () {
    var module = angular.module('AdsProject');

    var UserQueryExecutor = function ($http, rootUrl) {
        var registerUser = function(user) {
            return $http.post(rootUrl + 'user/register', user);
        }

        var getUserProfile = function() {
            
        }

        var editUserProfile = function() {
            
        }

        return {
            registerUser: registerUser,
            getUserProfile: getUserProfile,
            editUserProfile: editUserProfile
        };
    }

    module.factory('UserQueryExecutor', UserQueryExecutor);
}());
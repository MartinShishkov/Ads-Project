(function () {
    var module = angular.module('AdsProject');

    var UserQueryExecutor = function ($http, rootUrl, Auth) {
        function getHeaders() {
            var headers = {
                headers: {
                    'Authorization': "Bearer " + Auth.getUser().access_token
                }
            }

            return headers;
        }

        var registerUser = function (user) {
            return $http.post(rootUrl + 'user/register', user);
        }

        var getUserProfile = function() {
            return $http.get(rootUrl + 'user/profile', getHeaders());
        }

        var editUserProfile = function(newUser) {
            return $http.put(rootUrl + 'user/profile', newUser, getHeaders());
        }

        var changePassword = function(passwordInfo) {
            return $http.put(rootUrl + 'user/changepassword', passwordInfo, getHeaders());
        }

        return {
            registerUser: registerUser,
            getUserProfile: getUserProfile,
            editUserProfile: editUserProfile,
            changePassword: changePassword
        };
    }

    module.factory('UserQueryExecutor', UserQueryExecutor);
}());
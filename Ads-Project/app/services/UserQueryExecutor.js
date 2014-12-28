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

        var getAds = function (pageSize, startPage) {
            return $http.get(rootUrl + "ads?pagesize=" + pageSize + "&startpage=" + startPage);
        };

        var getCategories = function () {
            return $http.get(rootUrl + "categories");
        }

        var getTowns = function () {
            return $http.get(rootUrl + "towns");
        }

        return {
            registerUser: registerUser,
            getUserProfile: getUserProfile,
            editUserProfile: editUserProfile
        };
    }

    module.factory('UserQueryExecutor', UserQueryExecutor);
}());
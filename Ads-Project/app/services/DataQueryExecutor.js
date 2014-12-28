(function () {
    var module = angular.module('AdsProject');

    var DataQueryExecutor = function ($http, rootUrl) {
        var getAds = function(pageSize, startPage) {
            return $http.get(rootUrl + "ads?pagesize=" + pageSize + "&startpage=" + startPage);
        };

        var getCategories = function() {
            return $http.get(rootUrl + "categories");
        }

        var getTowns = function() {
            return $http.get(rootUrl + "towns");
        }

        var getUserAds = function (accessToken) {
            var headers = {
                headers: {
                    'Authorization': "Bearer " + accessToken
                }
            }

            return $http.get(rootUrl + "user/ads", headers);
        }

        // TODO: Implement further logic
        ////////////////////////////////

        return {
            getAds: getAds,
            getCategories: getCategories,
            getTowns: getTowns,
            getUserAds: getUserAds
        };
    }

    module.factory('DataQueryExecutor', DataQueryExecutor);
}());
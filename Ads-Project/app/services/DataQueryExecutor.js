(function () {
    var module = angular.module('AdsProject');

    var DataQueryExecutor = function ($http, rootUrl, Auth) {
        function getHeaders() {
            var headers = {
                headers: {
                    'Authorization': "Bearer " + Auth.getUser().access_token
                }
            }

            return headers;
        }

        var getAds = function(pageSize, startPage) {
            return $http.get(rootUrl + "ads?pagesize=" + pageSize + "&startpage=" + startPage);
        };

        var getCategories = function() {
            return $http.get(rootUrl + "categories");
        };

        var getTowns = function() {
            return $http.get(rootUrl + "towns");
        };

        var getUserAds = function() {
            return $http.get(rootUrl + "user/ads", getHeaders());
        };

        var publishAd = function (ad) {
            return $http.post(rootUrl + "user/ads", ad, getHeaders());
        };

        
        // TODO: Implement further logic
        ////////////////////////////////

        return {
            getAds: getAds,
            getCategories: getCategories,
            getTowns: getTowns,
            getUserAds: getUserAds,
            publishAd: publishAd
        };
    }

    module.factory('DataQueryExecutor', DataQueryExecutor);
}());
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

        var deactivateAd = function(id) {
            return $http.put(rootUrl + "user/ads/deactivate/" + id.toString(), null, getHeaders());
        }

        var publishAgain = function(id) {
            return $http.put(rootUrl + "user/ads/publishagain/" + id.toString(), null, getHeaders());
        }

        var editAd = function(id, newAd) {
            return $http.put(rootUrl + "user/ads/" + id.toString(), newAd, getHeaders());
        }

        var deleteAd = function(id) {
            return $http.delete(rootUrl + "user/ads/" + id.toString(), getHeaders());
        }

        // TODO: Implement further logic
        ////////////////////////////////

        return {
            getAds: getAds,
            getCategories: getCategories,
            getTowns: getTowns,
            getUserAds: getUserAds,
            publishAd: publishAd,
            getCategories: getCategories,
            deactivateAd: deactivateAd,
            publishAgain: publishAgain,
            editAd: editAd,
            deleteAd: deleteAd
        };
    }

    module.factory('DataQueryExecutor', DataQueryExecutor);
}());
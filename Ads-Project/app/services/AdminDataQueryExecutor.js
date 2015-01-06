(function () {
    var module = angular.module('AdsProject');

    var AdminDataQueryExecutor = function ($http, rootUrl, Auth) {
        function getHeaders() {
            var headers = {
                headers: {
                    'Authorization': "Bearer " + Auth.getUser().access_token
                }
            }

            return headers;
        }

        var getAds = function (pageSize, startPage, status) {
            if (status) {
                return $http.get(rootUrl + "admin/ads?status=" + status + "pagesize=" + pageSize + "&startpage=" + startPage + "&sortby=-Title", getHeaders());
            } else {
                return $http.get(rootUrl + "admin/ads?status=&pagesize=" + pageSize + "&startpage=" + startPage + "&sortby=-Title", getHeaders());
            }
        }

        var getAdsByAllFilters = function(pageSize, startPage, status, townId, categoryId) {
            return $http.get(rootUrl + "admin/ads?status=" + status
                + "&pagesize=" + pageSize
                + "&startpage=" + startPage
                + "&sortby=-Title"
                + "&townid=" + townId
                + "&categoryid=" + categoryId
                , getHeaders());
        }

        var approveAd = function (id) {
            console.log(getHeaders());
            return $http.put(rootUrl + "admin/ads/approve/" + id, null, getHeaders());
        }

        var getAdById = function(id) {
            return $http.get(rootUrl + "admin/ads/" + id, getHeaders());
        }

        var deleteAdById = function(id) {
            return $http.delete(rootUrl + "admin/ads/" + id, getHeaders());
        }

        return {
            getAds: getAds,
            approveAd: approveAd,
            getAdById: getAdById,
            getAdsByAllFilters: getAdsByAllFilters,
            deleteAdById: deleteAdById
        };
    }

    module.factory('AdminDataQueryExecutor', AdminDataQueryExecutor);
}());
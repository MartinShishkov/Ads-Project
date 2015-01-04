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

        var approveAd = function (id) {
            console.log(getHeaders());
            return $http.put(rootUrl + "admin/ads/approve/" + id, null, getHeaders());
        }

        return {
            getAds: getAds,
            approveAd: approveAd
        };
    }

    module.factory('AdminDataQueryExecutor', AdminDataQueryExecutor);
}());
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

        var getAllUsers = function() {
            return $http.get(rootUrl + "admin/users", getHeaders());
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

        var getAllTowns = function() {
            return $http.get(rootUrl + "admin/towns", getHeaders());
        }

        var getAllCategories = function () {
            return $http.get(rootUrl + "admin/categories", getHeaders());
        }

        var deleteCategory = function(id) {
            return $http.delete(rootUrl + "admin/categories/" + id, getHeaders());
        }

        var createCategory = function (category) {
            return $http.post(rootUrl + "admin/categories", category, getHeaders());
        }

        var editCategory = function(id, category) {
            return $http.put(rootUrl + "admin/categories/" + id, category, getHeaders());
        }

        var createTown = function(town) {
            return $http.post(rootUrl + "admin/towns", town, getHeaders());
        }

        return {
            getAds: getAds,
            approveAd: approveAd,
            getAdById: getAdById,
            getAdsByAllFilters: getAdsByAllFilters,
            deleteAdById: deleteAdById,
            getAllUsers: getAllUsers,
            getAllTowns: getAllTowns,
            getAllCategories: getAllCategories,
            deleteCategory: deleteCategory,
            createCategory: createCategory,
            editCategory: editCategory,
            createTown: createTown
        };
    }

    module.factory('AdminDataQueryExecutor', AdminDataQueryExecutor);
}());
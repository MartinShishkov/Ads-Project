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

        // TODO: Implement further logic
        ////////////////////////////////

        return {
            getAds: getAds,
            getCategories: getCategories,
            getTowns: getTowns
        };
    }

    module.factory('DataQueryExecutor', DataQueryExecutor);
}());
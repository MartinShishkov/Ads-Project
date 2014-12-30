(function () {
    var module = angular.module('AdsProject');

    var MessageProvider = function ($http, rootUrl) {
        var success = function(text) {
            noty({
                text: text,
                type: 'success',
                layout: 'topCenter',
                timeout: 3000
            });
        }

        var error = function(text) {
            noty({
                text: text,
                type: 'error',
                layout: 'topCenter',
                timeout: 3000
            });
        }

        return {
            success: success,
            error: error
        };
    }

    module.factory('MessageProvider', MessageProvider);
}());
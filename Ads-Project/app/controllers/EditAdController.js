(function () {
    var module = angular.module('AdsProject');

    var editAdController = function ($scope, $location, $routeParams, DataQueryExecutor, UserQueryExecutor, MessageProvider) {
        console.log('In edit ad controller.');

        DataQueryExecutor.getTowns()
            .then(function (result) {
                $scope.towns = result.data;
            });

        DataQueryExecutor.getCategories()
            .then(function (result) {
                $scope.categories = result.data;
            });

        DataQueryExecutor.getAdById(Number($routeParams.adId))
            .then(function (result) {
                $scope.ad = result.data;
                $scope.photo = $scope.ad.imageDataUrl;
                //$scope.ad.changeimage = false;
        }, function (error) {
                console.log(error);
            });

        (function () {
            if (window.FileReader) {
                var fileInput = document.getElementsByName('photo')[0];
                fileInput.addEventListener('change', handleFileSelect, false);
            }

            function handleFileSelect(evt) {
                var files = evt.target.files;
                var f = files[0];
                var reader = new FileReader();

                reader.onload = (function (file) {
                    return function (e) {
                        var imgElement = document.getElementById('newAdImageThumbnail');

                        imgElement.setAttribute('src', e.target.result);
                        $scope.photo = e.target.result;
                        $scope.ad.changeimage = true;
                    }
                })(f);

                reader.readAsDataURL(f);
            }
        }());

        $scope.deleteImage = function () {
            $scope.photo = "";
            $scope.ad.imageDataUrl = "";
            $scope.ad.changeimage = true;

            console.log("adadsa");
        }

        $scope.cancel = function() {
            $location.path('/user/ads');
        }

        $scope.attemptAdUpdate = function() {
            var newAd = {
                title: $scope.ad.title,
                text: $scope.ad.text, 
                changeimage: $scope.ad.changeimage,
                ImageDataURL: $scope.photo,
                categoryid: $scope.ad.categoryId,
                townid: $scope.ad.townId
            }

            DataQueryExecutor.editAd($routeParams.adId, newAd).then(function (result) {
                console.log("submitted");
                $location.path('/user/ads');
            }, function(error) {
                console.log(error);
            });

        }
    }

    module.controller('editAdController', editAdController);
}());
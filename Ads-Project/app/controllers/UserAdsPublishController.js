(function () {
    var module = angular.module('AdsProject');

    var userAdsPublishController = function ($scope, DataQueryExecutor, MessageProvider) {
        console.log("In user ads publish controller.");

        (function() {
            if (window.FileReader) {
                var fileInput = document.getElementsByName('newAdImage')[0];
                fileInput.addEventListener('change', handleFileSelect, false);
            }

            function handleFileSelect(evt) {
                var files = evt.target.files;
                var f = files[0];
                var reader = new FileReader();

                reader.onload = (function(file) {
                    return function(e) {
                        var imgElement = document.getElementById('newAdImageThumbnail');

                        imgElement.setAttribute('src', e.target.result);
                    }
                })(f);

                reader.readAsDataURL(f);
            }
        }());

        DataQueryExecutor.getCategories()
            .then(function (result) {
            $scope.categories = result.data;
        });

        DataQueryExecutor.getTowns()
            .then(function (result) {
                $scope.towns = result.data;
            });

        $scope.attemptPublish = function() {
            var ad = {
                title: $scope.newAdTitle,
                text: $scope.newAdText,
                imageDataUrl: $scope.newAdImage,
                categoryid: Number($scope.newAdCategory),
                townid: Number($scope.newAdTown)
            }

            DataQueryExecutor.publishAd(ad)
                .then(function (res) {
                MessageProvider.success("Advertisement submitted for approval. Once approved, it will be published.");
                console.log(res);
                }, function (error) {
                MessageProvider.error(error.data.message);
                console.log(error);
            });
        }

    }

    module.controller('userAdsPublishController', userAdsPublishController);
}());
(function () {
    var module = angular.module('AdsProject');

    var userAdsPublishController = function () {
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

    }

    module.controller('userAdsPublishController', userAdsPublishController);
}());
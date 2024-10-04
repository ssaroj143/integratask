const imageLoader = (images, callback) => {
  var allLoaded = 0;
  var _log = {
    success: [],
    error: [],
  };
  var verifier = function () {
    allLoaded++;
    if (allLoaded == images.length) {
      callback.call(undefined, _log);
    }
  };

  for (var index = 0; index < images.length; index++) {
    (function (i) {
      var imgSource = images[i];
      var img = new Image();
      img.addEventListener(
        "load",
        function () {
          _log.success.push(imgSource);
          verifier();
        },
        false
      );
      img.addEventListener(
        "error",
        function () {
          _log.error.push(imgSource);
          verifier();
        },
        false
      );
      img.src = imgSource;
    })(index);
  }
};

export { imageLoader };

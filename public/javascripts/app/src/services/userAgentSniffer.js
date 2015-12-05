angular.module('portfolio')
  .factory('UserAgentSniffer', [function() {

    var i;
    var isApple = false;
    var isAndroid = false;
    var iDevice = ['iPad', 'iPhone', 'iPod'];
    var androidDevice = ['Android', 'Linux armv7l'];

    for (i = 0; i < iDevice.length; i++) {
      if (navigator.platform === iDevice[i]) {
        isApple = true;
        break;
      }
    }

    for (i = 0; i < androidDevice.length; i++) {
      if (navigator.platform === androidDevice[i]) {
        isAndroid = true;
        break;
      }
    }

    var currentOS = function() {
      if (isApple)
      return 'CurrentOS: iOS';
      if (isAndroid)
      return 'CurrentOS: Android';
      else return 'CurrentOS: Unknown';
    };

    var sniffer = {
      iOS: isApple,
      android: isAndroid,
      currentOS: currentOS()
    };

    return sniffer;
  }
  ]);
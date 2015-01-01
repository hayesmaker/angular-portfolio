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
      return window.navigator.userAgent;
    };

    return {
      iOS: isApple,
      android: isAndroid,
      currentOS: currentOS()
    };
  }
  ]);
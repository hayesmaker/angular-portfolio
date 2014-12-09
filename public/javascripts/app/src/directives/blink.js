angular.module('portfolio')
  .directive('blink', ['$interval', function($interval) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        scope.visible = true;
        var blinkText = function() {
          scope.visible = !scope.visible;
        };

        var timeout;

        scope.blinkCursor = function() {
          timeout = $interval(blinkText, 200);
        };

        scope.stopBlink = function() {
          console.log('MOFO');
          clearTimeout(timeout);
        };

        if (scope.mode !== 'AMSTRAD') {
          scope.blinkCursor();
        }



      }
    }


  }]);
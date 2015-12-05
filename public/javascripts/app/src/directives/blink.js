angular.module('portfolio')
  .directive('blink', ['$interval', function($interval) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        console.log('{BlinkDirective} init');
        scope.visible = true;
        scope.userInput = "";

        var blinkText = function() {
          scope.visible = !scope.visible;
        };

        var timer;

        scope.startBlink = function() {
          console.log('START BLINK');
          timer = $interval(blinkText, 200);
        };

        scope.stopBlink = function() {
          console.log('STOP BLINK');
          $interval.cancel(timer);
          scope.visible = true;
        };

        scope.$on(
          "$destroy",
          function(e) {
            console.log('Blink cancelled');
            $interval.cancel( timer );
          }
        );

        scope.startBlink();
      }
    }


  }]);
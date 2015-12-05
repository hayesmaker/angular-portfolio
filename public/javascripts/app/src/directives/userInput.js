angular.module('portfolio')
  .directive('userInput', ['UserAgentSniffer', function(UserAgentSniffer) {
    return {
      restrict: 'E',

      link: function($scope, element, attrs) {
        $scope.about = "Welcome to my professional portfolio.  I am a software developer with more than 10 years experience writing games, websites and rich internet applications across multiple devices, in FLASH and HTML.";
        $scope.userInstructions = "Type RUN and press ENTER to start";
        $scope.mobile = false;

        if (UserAgentSniffer.iOS || UserAgentSniffer.android) {
          console.log('UserAgent Detects', UserAgentSniffer.currentOS);
          //$scope.userInstructions = "Tap RUN and ENTER to start";
          $scope.mobile = true;
        }





      }
    }


  }]);
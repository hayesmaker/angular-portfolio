angular.module('portfolio')
  .directive('userInput', [function() {
    return {
      restrict: 'E',

      link: function($scope, element, attrs) {
        $scope.about = "Welcome to my " + $scope.basicType + " Basic style porfolio, written in AngularJS.  Follow the instructions below to see my work.";
        $scope.userInstructions = "Type RUN and press ENTER to start";
        $scope.mobile =
          (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
       
        


      }
    }


  }]);
angular.module('portfolio')
  .controller('MainController', [
    '$scope',
    '$document',
    '$state',
    function($scope, $document, $state) {
      console.log('{MainController} init');
      $scope.title = "HAYESMAKER PORTFOLIO";


      $document.on('keydown', function(event) {
        $scope.$broadcast('keydown', {
          keyEvent: event
        });
      });

    }
  ]);

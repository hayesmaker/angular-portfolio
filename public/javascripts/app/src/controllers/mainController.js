angular.module('portfolio')
  .controller('MainController', [
    '$scope',
    '$document',
    '$state',
    'UserAgentSniffer',
    function($scope, $document, $state, UserAgentSniffer) {
      console.log('{MainController} init');
      $scope.title = "HAYESMAKER PORTFOLIO";
      $scope.currentOS = UserAgentSniffer.currentOS;

      $document.on('keydown', function(event) {
        $scope.$broadcast('keydown', {
          keyEvent: event
        });
      });

    }
  ]);

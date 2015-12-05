angular.module('portfolio')
  .controller('ConsoleController', [
    '$scope',
    '$document',
    '$state',
    function($scope, $document, $state) {
      console.log('{UserInput} init');
      //$scope.userInput = '';

      $scope.lines = [];

      $scope.$on('keydown', function(e, args) {
        if ($state.current.name !== 'console') return;
        console.log('event', args.keyEvent,  $scope.userInput);
        var event = args.keyEvent;
        if (event.keyCode === 32) {
          event.preventDefault();
          $scope.userInput += ' ';
          return;
        }
        //Enter
        if (event.keyCode === 13) {
          event.preventDefault();
          $scope.command($scope.userInput.toLowerCase());
          $scope.lines.push({});
        }
        //Escape
        if (event.keyCode === 27) {
          event.preventDefault();
          $scope.userInput = "";
        }

        //BackSpace
        if (event.keyCode === 8) {
          event.preventDefault();
          if ($scope.userInput.length) {
            $scope.userInput = $scope.userInput.slice(0, -1);
            return;
          }
        }
        if (event.keyCode !== 13) {
          $scope.userInput += String.fromCharCode(event.keyCode);
        }

      });

      $scope.enterTap = function(event) {
        $scope.command($scope.userInput.toLowerCase());
      };

      $scope.runTap = function(event) {
        $scope.userInput = "RUN";
      };

      $scope.command = function(input) {
        if (input.indexOf('run') >= 0) {
          console.log('{UserInputController} :: command :: RUN');
          $scope.userInput = "RUN";
          $state.go('list');
          return;
        }

        if (input.indexOf('ceren mode') >= 0) {
          $scope.userInput = "";
          $document.find('body').removeClass('amstrad').addClass('ceren');
          return;
        }

        if (input.indexOf('amstrad mode') >= 0) {
          $document.find('body').removeClass('ceren').addClass('amstrad');
          $scope.mode = 'AMSTRAD';
          $scope.userInput = "";
          //$scope.$broadcast('amstradMode');
          //$scope.amstradMode();
          return;
        }

        if (input.indexOf('c64 mode') >= 0) {
          $document.find('body').removeClass('ceren').removeClass('amstrad');
          $scope.mode = 'C64';
          $scope.userInput = "";
          //$scope.$broadcast('c64Mode');
          //$scope.c64Mode();
          return;
        }
      };

    }
  ]);

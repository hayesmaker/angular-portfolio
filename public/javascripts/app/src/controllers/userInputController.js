angular.module('portfolio')
  .controller('UserInputController', [
    '$scope',
    '$document',
    '$state',
    function($scope, $document, $state) {
      //$scope.active = true;
      //if ($scope.keyboardEventsActive) return;
      console.log('{UserInput} init');

      //todo keydown registered on each init
      $document.on('keydown', function(event) {
        //$scope.keyboardEventsActive = true;
        if ($state.current.name !== 'console') return;
        console.log('{keydown} userInput=', $scope.userInput);
        //Space
        if (event.keyCode === 32) {
          event.preventDefault();
          $scope.userInput += ' ';
          return;
        }
        //Enter
        if (event.keyCode === 13) {
          event.preventDefault();
          $scope.command($scope.userInput.toLowerCase());
        }
        //Escape
        if (event.keyCode === 27) {
          event.preventDefault();
          $scope.userInput = "";
          //$scope.stopApp();
        }

        //BackSpace
        if (event.keyCode === 8) {
          event.preventDefault();
          if ($scope.userInput.length) {
            $scope.userInput = $scope.userInput.slice(0, -1);
            return;
          }
        }

        $scope.userInput += String.fromCharCode(event.keyCode);
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
          $document.find('body').addClass('amstrad');
          $scope.mode = 'AMSTRAD';
          $scope.stopBlink();
          $scope.userInput = "";
          return;
        }

        if (input.indexOf('c64 mode') >= 0) {
          $document.find('body').removeClass('amstrad');
          $scope.mode = 'C64';
          $scope.userInput = "";
          return;
        }
      };

    }
  ]);

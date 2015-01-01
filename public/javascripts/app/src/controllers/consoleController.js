angular.module('portfolio')
  .controller('ConsoleController', [
    '$scope',
    '$document',
    '$state',
    function($scope, $document, $state) {
      console.log('{UserInput} init');
      $scope.basicType = "Commodore 64";
      //$scope.userInput = '';
      //$scope.lines = [];
      $scope.result = "";
      $scope.$on('keydown', function(e, args) {
        if ($state.current.name !== 'console') return;
        console.log('event', args.keyEvent,  $scope.userInput);
        
        var event = args.keyEvent;
        if (event.keyCode === 32) {
          event.preventDefault();
          $scope.userInput += ' ';
          return;
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
        //Enter
        if (event.keyCode === 13) {
          event.preventDefault();
          $scope.command($scope.userInput.toLowerCase(), $scope.userInput);
        }

      });

      $scope.enterTap = function(event) {
        $scope.command($scope.userInput.toLowerCase(), $scope.userInput);
      };

      $scope.runTap = function(event) {
        $scope.userInput = "RUN";
      };

      $scope.command = function(input, origin) {
        if (input.indexOf('run') >= 0) {
          console.log('{UserInputController} :: command :: RUN');
          $scope.userInput = "RUN";
          $scope.result = "Loading";
          $state.go('list');
          return;
        }

        if (input.indexOf('ceren mode') >= 0) {
          $scope.userInput = "";
          $scope.result = "Entering Ceren Mode";
          $document.find('body').removeClass('amstrad').addClass('ceren');
          return;
        }

        if (input.indexOf('amstrad mode') >= 0) {
          $document.find('body').removeClass('ceren').addClass('amstrad');
          $scope.mode = 'AMSTRAD';
          $scope.result = "Entering Amstrad CPC 464 Mode";
          $scope.userInput = "";
          return;
        }

        if (input.indexOf('c64 mode') >= 0) {
          $document.find('body').removeClass('ceren').removeClass('amstrad');
          $scope.mode = 'C64';
          $scope.userInput = "";
          $scope.result = "Entering C64 Mode";
          return;
        }

        if (input.indexOf('help') >= 0) {
          $scope.result = "Available Commands\n" +
            "-----------------\n" +
            "RUN\n" +
            "AMSTRAD MODE\n" +
            "C64 MODE\n" +
            "CEREN MODE\n" +
            "HELP\n";
          $scope.resut = $scope.result.toUpperCase();
          $scope.userInput = "";
          return;
        }

        $scope.result = "Syntax Error: " + origin + ". Ask for HELP?";
        $scope.userInput = "";
        

      };

    }
  ]);

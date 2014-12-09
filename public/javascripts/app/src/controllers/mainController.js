angular.module('portfolio')
  .controller('MainController', [
    '$scope',
    function($scope) {
      console.log('{MainController} init');
      $scope.title = "HAYESMAKER PORTFOLIO";

    }
  ]);

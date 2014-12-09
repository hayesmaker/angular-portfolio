angular.module('portfolio')
  .controller('ArticlesListController', [
    '$scope',
    '$state',
    '$document',
    'Articles',

    function($scope, $state, $document, articles) {
      console.log('{ArticlesListController} init');


      $scope.isSelected = [];
      $scope.selectedIndex = 0;
      $scope.articles = articles.model;
      $scope.active = false;

      $scope.deselectArticle = function(id) {
        $scope.isSelected[id] = '';
      };

      $scope.selectArticle = function(id) {
        $scope.isSelected[id] = 'isSelected';
      };

      //$scope.selectArticle($scope.selectedIndex);

      $document.on('keydown', function(event) {
        if ($state.current.name !== 'list') return;
        //Space
        if (event.keyCode === 32) {
          event.preventDefault();
          return;
        }
        //Enter
        if (event.keyCode === 13) {
          //event.preventDefault();
          //$state.go('article', {id: $scope.selectedIndex});
        }

        //Up
        if (event.keyCode === 40) {
          /*
          event.preventDefault();
          event.stopImmediatePropagation();
          $scope.deselectArticle($scope.selectedIndex);
          if ($scope.selectedIndex++ === $scope.articles.length - 1)
          {
            $scope.selectedIndex = 0;
          }
          $scope.selectArticle($scope.selectedIndex);
          return;
          */
        }

        //Down
        if (event.keyCode === 38) {
          /*
          event.preventDefault();
          event.stopImmediatePropagation();
          $scope.deselectArticle($scope.selectedIndex);
          if ($scope.selectedIndex-- === 0) {
            $scope.selectedIndex = $scope.articles.length - 1;
          }
          $scope.selectArticle($scope.selectedIndex);
          return;
          */
        }




      });



    }
]);

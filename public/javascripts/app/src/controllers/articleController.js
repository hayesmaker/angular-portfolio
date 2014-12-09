angular.module('portfolio')
  .controller('ArticleController', [
    '$scope',
    '$stateParams',
    'Articles',
    function($scope, $stateParams, articles) {
      console.log('{Article} init');
      var id = $stateParams.id;
      var model = articles.model[id];
      var thumbSize = model.thumb.size.split('x');
      $scope.title = model.title;
      $scope.date = model.date;
      $scope.company = model.company;
      $scope.desc = model.desc;
      $scope.imgSrc = model.thumb.src;
      $scope.imgWidth = thumbSize[0];
      $scope.imgHeight = thumbSize[1];
      $scope.linkUrl = model.link;
      $scope.linkDesc = 'LOAD "URL",8,1';
    }
  ]);

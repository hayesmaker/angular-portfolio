var portfolio = angular.module('portfolio', ['ui.router', 'ngAnimate']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/console");
  //
  // Now set up the states
  $stateProvider
    .state('console', {
      url: "/console",
      templateUrl: "partials/console.html",
      controller: 'UserInputController'
    })
    .state('list', {
      url: "^/list",
      templateUrl: "partials/list.html",
      controller: 'ArticlesListController'
    })
    .state('article', {
      url: "^/article/:id",
      templateUrl: "partials/article.html",
      controller: 'ArticleController'
    })
});
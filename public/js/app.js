var drinkApp = angular.module('drinkApp', [
    'ngRoute',
    'drinkControllers'
]);

drinkApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/component/search.html',
      controller: 'drinkController'
    });
}]);
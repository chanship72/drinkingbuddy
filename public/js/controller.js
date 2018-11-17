var drinkControllers = angular.module('drinkControllers', []);

drinkControllers.controller('drinkController', 
   function drinkControllers($scope, $http) {
    
    $scope.name = "drinking Buddy";
});
                            
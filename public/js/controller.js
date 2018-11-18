var drinkControllers = angular.module('drinkControllers', []);

drinkControllers.controller('drinkController', 
   function drinkControllers($scope, $http) {
    
    $scope.name = "drinking Buddy";
    $scope.inputPanel = true;
    $scope.statusPanel = false;
    $scope.searchPanel = false;
    $scope.socialPanel = false;
    
    $scope.form = {
        pid:"abc",
        pname: "Peter",
        pheight: 5,
        pweight: 120
    }
    $scope.submit = function(searchForm) {
        console.log("submit");
        $scope.inputPanel = false;
        $scope.statusPanel = true;
        $scope.searchPanel = false;
        $scope.socialPanel = false;        
    };
    $scope.openStatusPanel = function(){
        console.log("status");
        
        $scope.inputPanel = false;
        $scope.statusPanel = true;
        $scope.searchPanel = false;
        $scope.socialPanel = false;                
    };
    $scope.openSearchPanel = function(){
        console.log("search");

        $scope.inputPanel = false;
        $scope.statusPanel = false;
        $scope.searchPanel = true;
        $scope.socialPanel = false;                
    };
    $scope.openSocialPanel = function(){
        console.log("social");

        $scope.inputPanel = false;
        $scope.statusPanel = false;
        $scope.searchPanel = false;
        $scope.socialPanel = true;                
    };    
});
                            
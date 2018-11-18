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
    };
    $scope.submit = function() {        
        $scope.inputPanel = false;
        $scope.drinkPanel = true;
        $scope.discoverPanel = true;
        $scope.memoriesPanel = false;
        $scope.reportPanel = false;        
    };
    $scope.openDrinkPanel = function(){
        
        $scope.inputPanel = false;
        $scope.drinkPanel = true;
        $scope.discoverPanel = true;
        $scope.memoriesPanel = false;
        $scope.reportPanel = false;     
    };
    $scope.openDiscoverPanel = function(){

        $scope.inputPanel = false;
        $scope.drinkPanel = false;
        $scope.discoverPanel = true;
        $scope.memoriesPanel = false;
        $scope.reportPanel = false; 
    };
    $scope.openMemoriesPanel = function(){
        
        $scope.inputPanel = false;
        $scope.drinkPanel = false;
        $scope.discoverPanel = false;
        $scope.memoriesPanel = true;
        $scope.reportPanel = false; 
    };    
    $scope.openReportPanel = function(){
        console.log("report Panel");
        
        $scope.inputPanel = false;
        $scope.drinkPanel = false;
        $scope.discoverPanel = false;
        $scope.memoriesPanel = false;
        $scope.reportPanel = true; 
    };    
    $scope.popup_description = function(state) {
    	$('.popup-result').html('');
    	if (state == 'hangover') {
    		$('.popup-result').prepend('<img style="border-radius: 25px; display: block; width: 100%; height: 100%;" src="../images/drunk.png" />');
    	}else if (state == 'drunk') {
    		$('.popup-result').prepend('<img style="border-radius: 25px; display: block; width: 100%; height: 100%;" src="../images/drunk.png" />');
    	}else {
    		$('.popup-result').prepend('<img style="border-radius: 25px; display: block; width: 100%; height: 100%;" src="../images/alright.png" />');
    	}
        $('.popup').fadeIn();
    }
    $scope.close_popup = function() {
        $('.popup').fadeOut();

    }
});
                            
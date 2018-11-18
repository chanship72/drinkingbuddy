var drinkControllers = angular.module('drinkControllers', []);

drinkControllers.controller('drinkController', 
   function drinkControllers($scope, $http) {
    
    $scope.name = "drinking Buddy";
    $scope.inputPanel = true;
    $scope.statusPanel = false;
    $scope.searchPanel = false;
    $scope.socialPanel = false;
    //$scope.personIdx = 1;
    
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
        
        $('.choose-alcohol').change(function(){
        	console.log($(this).val());
        	
        	var t = $(this).closest(".person-alcohol-row").find(".person-right");
    		
    		t.append(`<div class="rowCups" user-id="10" cuptype="`+$(this).val()+`" cup-count="0">
				<div class="rowCups-inner"></div>
				<button class="addCups">+</button>
			</div>`);

			t.children().last().click($scope.clickaddCups);
        	
        });    
    };
    
	$scope.clickaddCups = function(){
		var type = $(this).attr("cuptype");	//.parent()
		var c = 1+parseInt($(this).attr("cup-count"));	//.parent()
		//console.log(c+" "+type);
		$(this).attr("cup-count",c);	//.parent()
			var t = $(this).find(".rowCups-inner");	//.parent()
		t.append('<div class="image-cup cup-'+type+'"></div>');
		t.children().last().hide().show('slow');

		if( (type=="wine" && c%5==0)
			|| (type=="soju" && c%7==0))
		{
			$(this).find(".rowCups-inner .cup-"+type).remove();	//parent()
		  t.append('<div class="image-cup bottle-'+type+'"></div>');
		  t.children().last().hide().show('slow');

		}

		$scope.updateTotalAlcohol($(this));
	}    
	
	$scope.updateTotalAlcohol = function(obj)
	{
		//$(this).closest('.person-alcohol-row')
		var total = 0;
	  obj.closest('.person-alcohol-row').find(".rowCups").each(function(){
		var type = $(this).attr("cuptype");
		var weight = 0;
		if(type=="wine")
			weight = 7;
		else if(type=="soju")
			weight = 15;
		else if(type=="beer")
			weight = 8;
		total += weight * parseInt($(this).attr("cup-count"));
	  });
	  //$("#total-alcohol").text(total);
	  var idx = obj.closest('.person-alcohol-row').attr("person-index");
	  var spec = {"1":160.0,"2":1500.0,"3":120.0,"4":200.0,"5":10.0};
	  var howmuch = parseFloat(total)/spec[idx];
	  howmuch = (howmuch>1)?1:howmuch;
	  //console.log(howmuch);
	  //var pindex = obj.attr("person-index");
	  
	  var iidx = parseInt(idx);
	  $('.face-overlay').css('background-color','rgba(255, 0, 0, '+howmuch+')');
	  //$('.ssnp:nth-of-type('+idx+')').css('border','2px solid rgba(255, 0, 0, '+howmuch+')');
	  $('.ssnp:nth-of-type('+idx+')').css('background-color','rgba(255, 0, 0, '+howmuch+')');
	  console.log($('.ssnp:nth-of-type('+idx+')'));
	}		
    
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
    
    $scope.clickDrinkPeople = function(event){
        //console.log(event);
        console.log($(event.target));
        var index = 1;
        $(".ssnp").each(function(){
        		$(this).find("img").css("opacity",""); 
        		$(this).css("opacity",""); 
        		if($(event.target).parent().is($(this)))
        		{
        			console.log(index);
        			$('.person-alcohol-row').addClass('hide');
        			//$('.person-alcohol-row:nth-of-type('+index+')').removeClass('hide');
        			$('.person-alcohol-row[person-index="'+index+'"]').removeClass('hide');
        			
        			$scope.updateTotalAlcohol($('.person-alcohol-row[person-index="'+index+'"] select'));
        		}
        		index++;
        });
		$(event.target).css("opacity","0"); 
		$(event.target).parent().css("opacity","0");    
		$("#big-face").css("background-image","url("+$(event.target).attr("src")+")");  
		
		

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
                            
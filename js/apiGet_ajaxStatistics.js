$(document).ready(function(){
	
	
	
	// Click to convert specified sum to specified currency
	$(document).on("click", '#apiStatButton', function() { //newly generated
	
	    getApiStatistics();
	}); 
	
	
	
	
	
	
	
	
	
	
	
	//onClickconverts gets ajax API stats
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function getApiStatistics()
	{

       
		
         //alert("start");
	
        // send  data  to  PHP handler  ************ 
        $.ajax({
            url: 'ajax_php/GetStatistics_ajax.php',
            type: 'POST',
			dataType: 'JSON', //'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    
			},
			async: false,
            success: function(data) {
                // do something;
                $("#apiStatistics").stop().fadeOut("slow",function(){ $(this).html("Requests used: " + data.data.usage.requests + "<br>Requests_remaining: " + data.data.usage.requests_remaining + "<br> Days_remaining: " + data.data.usage.days_remaining ) }).fadeIn(2000);
			    $("#apiStatistics").css("border","1px solid black");
            },  //end success
			error: function (error) {
				$("#apiStatistics").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br> NO Stats FOUND</h4>")}).fadeIn(2000);
            }	
        });                                      
       //  END AJAXed  part 
	   
	   
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
// end ready	
	
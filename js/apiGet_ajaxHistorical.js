$(document).ready(function(){
	
	
	
	// Click to show hidden Historical div
	$("#showPeriodRangeDiv").click(function() {  
	    $("#periodDiagramDiv").toggle(1200);
		
		//hide exchange results 171 country
		$("#currencyResult").fadeOut(700);	//hide all curr list
        $("#exchangeResult").fadeOut(400);	
         		 
	   
	}); 
	
	
	// Click to send ajax Historical Period request
	$("#getDiagram").click(function() {  
	
	
	    getHistoricalPeriodResult();
	   
	});
	
	
	
	// Click to close/hide historical results ()
	$(document).on("click", '#diagramDismiss', function() {   // this  click  is  used  to   react  to  newly generated cicles;
         $("#periodDiagramDiv").hide(1200);
         //scroll_toTop();		 
    
	});
	
	
	
	
	
	
	// getHistoricalPeriodResult
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function getHistoricalPeriodResult()
	{
		
		
		var userInput = $("#dateHistorical").val(); //user date input in 1998-08-16
	
	    //
		//set today date to timepicker by default -NOT WORK
		/*
		var date = new Date(); //gets the date onbject
		var nowX = ('0' + date.getDate()).slice(-2)  +  '.'  +  ('0' + (date.getMonth() + 1)).slice(-2) +  '.'  +  date.getFullYear(); // gets datay in format dd-mm-yyyy
		$("#dateHistorical").val("2012-08-15");  // set today to date <input type="date"> onLoad in format dd-mm-yyyy
		
		alert(nowX);
        */

		
		var currencyHistorical = $("#sel3").val(); //currency selected by user
		//var dateX = $("#dateHistorical").val(); //user date input
		var dateLimit_Jan_1st_1999 = new Date("1999-01-01").getTime(); //Jan 1st, 1999, limited by API, older data is not available //1999-01-01-> YY-MM-DD, var is UnixStamp
		var dateLimit_today = new Date().getTime();  //convert today date  to UnixStamp
		//alert ("rr  " + userInput );
		
		//convert user input date to UnixStamp
		var userInput_UnixStamp = new Date(userInput).getTime();
		
		//check if user selected the date
		if (!userInput){
				alert("Please select the date");
				return false;
		}
		
		
		
		//check if user selected the date between now and Jan_1st_1999
		if (userInput_UnixStamp > dateLimit_today || userInput_UnixStamp < dateLimit_Jan_1st_1999  ){
			alert("Select between today and Jan 1st, 1999");
			return false;	
		}
		
		
		

       // send  data  to  PHP handler  ************ 
        $.ajax({
            url: 'ajax_php/HistoricalPeriod_ajax.php',
            type: 'POST',
		dataType: 'json', //{json/text}, text cause MEGA ERROR without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    serverDate: userInput,  //pass the user selected date
			    
			},
			async: false,
            success: function(data) {
                // do something;
                //$("#weatherResult").stop().fadeOut("slow",function(){ $(this).html(data) }).fadeIn(2000);
			    //alert("S");
				
				
				construct_ajaxDiagramPeriod_Answer(data, currencyHistorical, userInput); //constructs the answer, passes arguments:(received ajax data, selected currency(won't be visible withou this, selected date))
            },  //end success
			error: function (error) {
				$("#periodDiagramDivResult").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br> NO Currency FOUND</h4>")}).fadeIn(2000);
            }	
        });                                      
       //  END AJAXed  part 

	   
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	// Function that constructs/ fires on ajax success of {getHistoricalPeriodResult()} and forms the answer/constructs the answer
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function construct_ajaxDiagramPeriod_Answer(dataZ, currencyHistorical_Arg, userInput_Arg)  //arguments:(received ajax data, selected currency(won't be visible withou this, selected date))
	{
		try{	
		
		    //alert(currencyHistorical_Arg);
	        var alls = "<h3 class='red myShadow textShadow'>Historical diagram =>  </h3><div class='row border-black'>";
		
		    if(typeof dataZ.rates[currencyHistorical_Arg] === 'undefined' || dataZ.rates[currencyHistorical_Arg] === null) {  //if exchange rate was not found 
				throw "<br><p class='red'>Please note, specified request was not found, try another date</p>";
			}
		
		    alls = alls + "Exchange rate for " +
        	             currencyHistorical_Arg + " on " + userInput_Arg + 
			             " was " +  
			             dataZ.rates[currencyHistorical_Arg] + " " + currencyHistorical_Arg  +  " per 1 USD"; // dataZ.rates.currencyHistorical_Arg causes MEGA ERROR
			   
	        alls = alls + "</div><br><input id ='diagramDismiss' type='button' class='btn btn-default' style='font-size:20px' value='OK'>";
	        //html weather result with animation
            $("#periodDiagramDivResult").stop().fadeOut("slow",function() { $(this).html(alls)}).fadeIn(2000);
			
		} catch(err) {
			$("#periodDiagramDivResult").stop().fadeOut("slow",function() { $(this).html(err)}).fadeIn(2000);
		}
	
		  
		  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
});
// end ready	
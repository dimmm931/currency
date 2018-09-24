$(document).ready(function(){
	
	window.myJsonData; //will store to global json answer
	
	// Click to convert specified sum to specified currency
	$("#getCurrencyExchange").click(function() {  
	    myAjaxCurrencyRequest(); //runs ajax request to get all JSON curr List
		calcTheSum();  // calc  the exchange rate of specified sum
	}); 
	
	
	// Click to show all 170 currencies rate
	$("#getAllCurrencyList").click(function() {  
	    closeResults();
	    myAjax_toShowAllCurrenciesList(); //uses the same  function  myAjaxCurrencyRequest();
		
	});
	
	
	// Click to close results (list and exchange)
	$(document).on("click", '.close-it', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        closeResults();		 
	    
	});
	
	
	
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function closeResults(){
		$("#currencyResult").fadeOut(700);	//hide all curr list
         $("#exchangeResult").fadeOut(400);	
         scroll_toTop();
	}
	
	
	
	
	
	
	
	//onClickconverts specified sum to specified currency
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function myAjaxCurrencyRequest() 
	{

        //shows preloader spinner onClick
		$("#overlay").show();
		$("#overlay").fadeOut(4000);
		
		 if(screen.width <= 640){ 
	       scrollResults(".container"); //scroll the page down to currencies results  //#currencyResult
		 }
		

	
        // send  data  to  PHP handler  ************ 
        $.ajax({
            url: 'ajax_php/Currency_ajax.php',
            type: 'POST',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    
			},
			async: false,
            success: function(data) {
                // do something;
                //$("#weatherResult").stop().fadeOut("slow",function(){ $(this).html(data) }).fadeIn(2000);
			    //alert("S");
				window.myJsonData = data; //assing to global
				//alert("AED is " + data.rates.AED);
				
				construct_ajaxCurrencyAnswer(data); //constructs the answer
            },  //end success
			error: function (error) {
				$("#currencyResult").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br> NO Currency FOUND</h4>")}).fadeIn(2000);
            }	
        });                                      
       //  END AJAXed  part 
	   
	   
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Function that fires on ajax success of {myAjaxCurrencyRequest()} and forms the answer/constructs the answer
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function construct_ajaxCurrencyAnswer(data)
	{
		
		var l = Object.keys(data.rates).length;
		//alert("Found currencies " + l);
		
		var alls = "<br><br><h3 class='red myShadow textShadow'>All currencies => " + l + " </h3><div class='row border-black'>";
		
		for (var key in data.rates) {
	    //for (var i = 0; i < l; i++){  
			alls = alls + "<div class='col-sm-1 col-xs-2'>" + key + ":</div>" + 
			              "<div class='col-sm-2 col-xs-5'>" + data.rates[key] +  "</div>" +
					      "<div class='col-sm-9 col-xs-5'> per 1 USD </div>";
		}
	    alls = alls + "</div>";
	//html weather result with animation
    $("#currencyResult").stop().fadeOut("slow",function(){ $(this).html(alls)}).fadeIn(2000);
	
	
		  
		  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Function that calc  the exchange rate of specified sum
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function calcTheSum()
	{
		if (checkIfNotTheSameVal()){
			
			 if(screen.width <= 640){ 
	            scrollResults(".container"); //scroll the page down to currencies results
		     }
		 
		
             var curr1 = $("#sel1").val();
		     var curr2 = $("#sel2").val();
	     
		    
		 
		     //alert(curr1);
	         //alert("uu " + window.myJsonData.rates.GBP);
			 //alert("Comapare " +  window.myJsonData.rates.GBP + " vs " + window.myJsonData.rates[curr1]);
			 //alert("OBJ- " + JSON.stringify(window.myJsonData.rates[x], null, 4));  
		     //alert(window.myJsonData.rates[curr2]);
			 
			 
			 // Mega Err was here-> use {window.myJsonData.rates[curr1]} not {window.myJsonData.rates.curr1} to access json object value while the key is a variable from <select><option>
			 var amount = $("#sum").val(); // the sum to exchange
			 var selected_toUSD = amount / window.myJsonData.rates[curr1]; //gets the amount of selected_1 currency in USD
			 var exchangeRate = selected_toUSD * window.myJsonData.rates[curr2];  //gets the Final sum ( USD sum * exch rate selected_2 currency)
			 
			 
			 // fixing cases when exchange rate = 0.001-------------
			 var n = 2;  //counter for toFixed(n)
			 
			 
			 if (parseInt(exchangeRate) !== exchangeRate) {  //check if it is Float, not int (if has ".")
                 //alert("Float is detected");
	             var c = exchangeRate.toFixed(20);  // fixes trouble with long  floats,  helps to avoid scintific notation "e"
	
                 var stringX = c.toString();     //alert(stringX);
	             var arr = c.split('.');
                 var final = arr[1];  //float part after the "."     //alert('array -> ' + final);
                 var i = 1;
 
                 while (final[i] == 0) { //if  float part after the "." equals 0     //arr[1]= 00007;
                      ++i;
                 }
                 //alert(arr[1][1]);
 
                 //alert("cut to-> " + i);

                 n = i + 1;  //numberr to use in toFixed(n)
	            //alert(parseFloat(c));
                //alert(parseFloat(c).toFixed(n + 1));  //must include parseFloat(c) to convert string to Float ot  it will contain "e" //must include (n+1) to get correct toFix
	 
            } else { // if it is a int , not Float do nothing
                alert("No match for FLOAT, it is just an int " + c);
            }
 
			 // end fixing-------------------
			 
			 
			 
			 
			 
			 var finalExchange = exchangeRate.toFixed(n) + " " + curr2; //gets the Final sum ( USD sum * exch rate selected_2 currency),{.toFixed(2)} = 3.77 instead 3.77458745438954
		     var finalText = "<h3 class='red border-black myShadow textShadow'><span class='badge close-it' style='padding:0.8em;'>X</span><i class='fa fa-child' style='font-size:48px;margin-left:5%;'></i><br><br>" +  $("#sum").val() + " " + curr1 + " = " + finalExchange + "</h3>"; // 100 UAH = 4 USD
			 
			 //html weather result with animation
             $("#exchangeResult").stop().fadeOut("slow",function(){ $(this).html(finalText)}).fadeIn(2000);
			 
			
		}  
		  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	// Function that 
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function checkIfNotTheSameVal()
	{
	    if($("#sel1").val()== $("#sel2").val()){
			alert("Same value, change one of them");
			return false;
		} else {
			return true;
		}
		  	  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//onClickconverts shows all 170 currencies rate
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function myAjax_toShowAllCurrenciesList() 
	{
        //alert("K");	
        myAjaxCurrencyRequest(); //runs ajax request to get all JSON curr List
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//-------------------------------DONOR------------------------------------------------------------------------------------------------------------------
	
	
	
	// Scroll the page to results  #resultFinal
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function scrollResults(divName) 
	{
		 
         $('html, body').animate({     
            scrollTop: $(divName).offset().top
			//scrollTop: $('.footer').offset().top
            //scrollTop: $('.your-class').offset().top
        }, 'slow'); 
		// END Scroll the page to results
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	//scrolls the page up
	function scroll_toTop() 
	{
	    $("html, body").animate({ scrollTop: 0 }, "slow");	
	}
	
	
	
	
	
	
	
	
	
	
	
});
// end ready	
	
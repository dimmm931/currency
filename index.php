<!DOCTYPE html>
  <html>
    <head>
      <title>Live Currency exchange rate</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  
	  <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="Онлайн конвертер валют" />  <!-- Currency exchange rate data and currency conversion-->
      <meta name="keywords" content="Currency calculator, exchange rate data and currency conversion">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="js/myCurrency.js"></script><!--  Core Currency JS-->  
	  <script src="js/currenciesList.js"></script><!--  List of currencies + generates <list><option> JS--> 
	  <script src="js/changeStyleTheme.js"></script><!--  change wallpapers,changeStyleTheme JS-->
	  <script src="js/apiGet_ajaxStatistics.js"></script><!-- JS - onClick gets Api statistics in modal-->
	  <script src="js/apiGet_ajaxHistorical.js"></script><!-- JS - Diagram Range with currency history-->
	  
	 
      <link rel="stylesheet" type="text/css" media="all" href="css/myCurrency.css">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Icon lib-->
	  
	    <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

  </head>
  <body>
  
  
  
  
  
  
  
  
  
  

  
  
   <div id="headX" class=" text-center myShadow colorAnimate head-style"> <!--#2ba6cb;-->
       
	   
         <h1 id="h1Text">
             <img id ="wLogo" class="shrink-large" src="">	 
		     <span id="textChange" class="textShadow"> Live Currency Exchange rates</span> 
			 <i class="	fa fa-balance-scale" style="font-size:59px"></i> 
		     
			 <img id ="wLogo2" src="" style="width:44%;"/>
			 <br>
			 <?php date_default_timezone_set("Europe/Kyiv"); ?>
			 <span>Consistent, reliable exchange rate data and currency conversion</span><br>
			 <span id="" style="font-size:0.4em;" class="textShadow">last update:   <?php echo date("l") . "  " . date("d/m/Y") ." " .  date("h:i") ?>  from Openexchangerates Stock</span> 
			
			 
		 </h1> 
		   
           <!--<p class="header_p">All cities weather processor</p>-->  <!--generates random lists, ramdomizes integers, etc--> <!--<span class="glyphicon glyphicon-duplicate"></span>-->  
	   </div>
	   
	 



         <br>
		 <!--<div class="item contact padding-top-0 padding-bottom-0" id="contact1">-->
         <div class="wrapper grey">
    	     <div class="container">
		   
		   
		   
		         <div class="col-sm-12 col-xs-12 myShadow mainX head-style" style="background-color:;">
				     <i class="	fa fa-dollar" style="font-size:40px"></i>&nbsp;&nbsp;<i class="fa fa-toggle-on" style="font-size:40px"></i>
				 
			         <form class="form-inline" action="">
                          <div class="form-group">
                              <label for="sum">Sum</label>
                              <input type="number" min="1" value="1" class="form-control" id="sum" name="sumX">
                          </div>
						  
                          <div class="form-group" id="Currency1_dropdown1"><!-- Currency 1 dropdown (from), generated in js/currenciesList.js with function {generateSelectOption(selectedOption, i, spanID, textR)}--> 
                          </div>
						  
						  <div class="form-group" id="Currency2_dropdown2">> <!-- Currency 2 dropdown (to), generated in js/currenciesList.js with function {generateSelectOption(selectedOption, i, spanID, textR)}--> 
                          </div>
						  
                          <input id ="getCurrencyExchange" type="button" class="btn btn-default fa fa-cc-visa" style="font-size:20px" value="OK">
						  <input id ="getAllCurrencyList" type="button" class="btn btn-default fa fa-cc-visa" style="font-size:20px" value="Show all List">
						  <br><br><br>
                      </form>
				   
			     </div> <!--END  <div class="col-sm-4 col-xs-12 myShadow mainX-->
				
				
				
				 
				  <!--------------------------------Start Historical(rates for certain date)------------------------------------------------->
				  <br><br><br><br><br>
				  <input id ="showPeriodRangeDiv" type="button" class="btn btn-default " style="font-size:8px; margin-top:7px;" value="Check History"/><br>
				  
				  <!-- Div with  specified period diagram-->
				  <div class="col-sm-10 col-xs-12" id="periodDiagramDiv"> <!-- div calc exchange-->
				    <h2 class="textShadow"> View history of currency exchange rates</h2>
				      <form class="form-inline" action="">
					  
					      <div class="form-group">
                              <label for="dateHistorical">Select date starting from Jan 1st, 1999</label>
				              <input type="date" name="" id="dateHistorical"> 
						  </div>
						  
						  
						  
						  <div class="form-group" id="Currency_Diagram_dropdown"><!-- Currency for Diagram, generated in js/currenciesList.js with function {generateSelectOption(selectedOption, i, spanID, textR)}--> 
                          </div>
						  
						  <input id ="getDiagram" type="button" class="btn btn-default fa fa-cc-visa" style="font-size:20px" value="Get">
						  
					</form>
						  
				  
				  
				  
				       <!-- This div accepts Diagram period the JS html result-->
				       <div class="col-sm-10 col-xs-12" id="periodDiagramDivResult"> 
				       </div>
				       <!--------------------------------END  Historical(rates for certain date------------------------------------------------->
				  
				  </div> <!-- END class="row periodDiagram">-->
				  
				  
				  <!----Currency Core result---->
				  <!-- This div accept the JS html result--><!--style='word-wrap: break-word;'--> 
				  
				  <div class="col-sm-12 col-xs-12 myShadow" id="exchangeResult"> <!-- div calc exchange-->
				  </div> <!-- END class="row exchangeResult">-->
				
				 <div class="col-sm-12 col-xs-12 myShadow" id="currencyResult"> <!-- div for listing all curr rates-->
		
				 </div> <!-- END class="row CurrencyResult">-->
				  
				  
				 

		 
				 
				 <br><br><br><br><br><br><br><br><br><br><br>
				 <!-------------------------------FACEBOOK SHARE--------------------------------------->
				 <!-- my custom FB share-->
				 <!--
				 <div class="col-sm-12 col-xs-12 facebook>
				     
					 <center>
                         <a class="fb-share-button large" href="https://www.facebook.com/sharer/sharer.php?u=http://waze.zzz.com.ua/store_locator" target="_blank"><input type="button" value="MyShare" style="background:blue;padding:5px 20px 5px 20px;color:white;border-radius:20px;"/></a>
				    
					     <div class="fb-share-button large" 
                             data-href="=https://www.facebook.com/sharer/sharer.php?u=http://waze.zzz.com.ua/store_locator" 
                             data-layout="button_count">
                         </div>
					</center>
				 </div>--><!-- END <div class="col-sm-4 col-xs-12 facebook>-->
				 
                 <!-----------------------------END FACEBOOK SHARE--------------------------------------->                  
     
    	     </div><!-- /.container -->			  		
    	 </div><!-- /.wrapper -->
      <!--</div>-->   <!-- /.item -->
	  
	     <div style="height:277px;"></div><!-- just to press footer-->
                

       
		<!---------PAGE LOADER SPINNER START, visible while the page is loading, uses js/main_layout.js, css is in yii2_mine.css--------------->
	    <div id="overlay" class="col-sm-12 col-xs-12 myShadow">
		    <center>
		        <img src="images/spinner.gif" alt="" style="width:33%;"/>
			</center>
        </div>
        <!---------END PAGE LOADER SPINNER------------------------------------------------------------------------------------------------------>
	
	
	
		
		
		  <!-----Footer ---->
		        
				<div class="footer "> <!--navbar-fixed-bottom  fixxes bootom problem-->
				    <!--Contact: --> <strong>dimmm931@gmail.com</strong><br>
					<?php  echo date("Y"); ?>
				</div>
		<!--END Footer ---->  
		
		
		
	
		
		
  
  
  
  
  
  
  
  
  
       <!-----------------  Button to change Style theme------------------------->
	   <input type="button" class="btn" value=">>" id="changeStyle" style="position:absolute;top:0px;left:0px;" title="click to change theme"/>
	   <!-----------------  Button to change Style theme------------------------->
  
      
	   <!-----------------  Button with info------------------------------------>
	   <!--data-toggle="modal" data-target="#myModalZ" is a Bootstrap trigger---->
	   <button data-toggle="modal" data-target="#myModalZ" class="btn" style="font-size:17px; position:absolute;top:0px;right:0px;" title="click to see info">
	       &nbsp;<i class="fa fa-info-circle"></i>&nbsp;
	   </button>    
	   <!-----------------  Button with info------------------------------------>
  
  
  
  
  
  
      <!-----------------  Modal window with info------------------------------>
      <div id="myModalZ" class="modal fade" role="dialog">
          <div class="modal-dialog">
          <!-- Modal content-->
              <div class="modal-content">
                  <div class="modal-header">
                       <button type="button" class="close" data-dismiss="modal">&times;</button>
                       <h4 class="modal-title">About the Open Exchange </h4>
                  </div>
                  <div class="modal-body">
				      <center>
				      <img src="images/data.jpg" alt="img"/><br><br><br>
					  
					  <button type="button" id="apiStatButton" class="btn"> View statistics</button> <!-- button to send ajax for statistics details-->
					  <!-- div to display statistics details-->
					  <div id="apiStatistics" class="stats">
					  </div>
					  <br><br>
					  
                      <p>Open Exchange Rates provides a simple, lightweight and portable JSON API with live and historical foreign exchange (forex) rates for over 200 worldwide and digital currencies, via a simple and easy-to-integrate API, in JSON format. 
					      <br><br>Data are tracked and blended algorithmically from multiple reliable sources, ensuring fair and unbiased consistency. 
                          <br><br>Exchange rates published through the Open Exchange Rates API are collected from multiple reliable providers, blended together and served up in JSON format for everybody to use. There are no complex queries, confusing authentication methods or long-term contracts.
                          <br><br>End-of-day rates are available historically for all days going back to 1st January, 1999.
					  </p>
					  </center>
                  </div>
                  <div class="modal-footer">
                       <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>

         </div>
     </div>
      <!-----------------  END Modal window with info---------------------------->
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
 <!----------------------- FB API  share---------------------->
 <center><br><br>
  
 <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your share button code -->
<!--
  <div class="fb-share-button large" 
    data-href="=http://waze.zzz.com.ua/store_locator/" 
    data-layout="button_count">
  </div>
  -->
  <!----------------------- END FB API  share---------------------->

 <br>
 
 
 

 

</body>
</html>
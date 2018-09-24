<?php
    include '../Classes/autoload.php'; //uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted
	
	
	   
    //make sure that this script can be called from your application, check if  a Constant was declared, u should define $SecurityConstant in main index.php
	//$a = new Security();
    //$a->checkSecurityConstant();  //CHECK SECURITY!!!!!!!!!!!!!!!
   
   
    // run Class RunWeatherRequest to send file_get_contents($data_url)
	Currency::askCurrencyApi();
	
	
	
	
	
	
	
	
	
	
	
	
	
?>
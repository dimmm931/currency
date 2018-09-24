<?php
    include '../Classes/autoload.php'; //uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted
	
	
	   
    //make sure that this script can be called from your application, check if  a Constant was declared, u should define $SecurityConstant in main index.php
	//$a = new Security();
    //$a->checkSecurityConstant();  //CHECK SECURITY!!!!!!!!!!!!!!!
   
   
   
    // run Class GetApiDiagramPeriodRange to send file_get_contents($data_url)
	GetApiHistorical::askHistoricalData($_POST['serverDate']);   //$_POST[' serverDate'] is a selected date passed from ajax in {getHistoricalPeriodResult()}->apiGetHistorical.js
	
	
	
	
	
	
	
	
	
	
	
	
	
?>
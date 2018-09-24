<?php
 include '../Credentials/api_credentials.php'; //api key
 class GetApiStatistics
 {
		
		
		
    public static function askStatistics()
	{
		
	     //form the URL for Currency API
	     $data_url = "https://openexchangerates.org/api/usage.json?app_id=".API_KEY;  //
	
	     // Gets the OpenWeather API
         if (!$json = file_get_contents($data_url)) {
		     echo "<br>Api stats php Error</br>";
	     }
         //$obj = json_decode($json,true);//,  true used for [], not  used  for '->';
	     
         echo $json;
         //print_r($obj); // display the JSOn to screen
         //echo json_encode($obj); // MAke sure JSOn encode  gotten result 
	
	}
		
		
		
		
		
		
		
}





// open exchange URL // valid app_id * REQUIRED *  //https://openexchangerates.org/api/latest.json?app_id=API_KEY
/*
$exchange_url = 'https://openexchangerates.org/api/latest.json';
$params = array(
    'app_id' => 'API_KEY'
);

// make cURL request // parse JSON
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => $exchange_url . '?' . http_build_query($params),
    CURLOPT_RETURNTRANSFER => true
));
$response = json_decode(curl_exec($curl));
curl_close($curl);

if (!empty($response->rates)) {
    // convert 150 USD to JPY ( Japanese Yen )
    echo $response->rates->JPY * 150;
} else {
	echo "EMPTY";
}

*/



   
   //http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y
   //https://stackoverflow.com/questions/3139879/how-do-i-get-currency-exchange-rates-via-an-api-such-as-google-finance
   //$b = currency($_GET['fromX'], $_GET['toX'], $_GET['sumX']);
   //echo $b;

?>
 Here is your App ID, which you can use to access our API:=> look in class Currency

 
 1. Uses https://openexchangerates.org/api/latest.json?app_id=API_KEY";
 
 How it works:
 1. By clicking "OK", we run {myAjaxCurrencyRequest()}, which runs ajax request to get all JSON. It sends ajax to ajax_php/Currency_ajax.php, which uses autoload and runs Class Currency {Currency::askCurrencyApi();}
 2. Currency::askCurrencyApi() connects {https://openexchangerates.org/api/latest.json?app_id=API_KEY} and echo $json;
 3. myAjaxCurrencyRequest() onSuccess gets this echoed json, runs {construct_ajaxCurrencyAnswer(data)}which constructs all currencies list and then runs {calcTheSum()}
 4. {calcTheSum()} checks if <select><option> are not the same (with checkIfNotTheSameVal()), gets field with sum, multiple it by USD exchange rate (according to curr selected in first input)
 4.1 <selecte><option> dropdawn is generated in js/currenciesList.js with {generateSelectOption(selectedOption, i, spanID, textR)}. This function generates it based on array currencyList[], which contains arrays with currencies names which are strictly the same as in JSOn answer from Openexchangerates.
 4.2 While generating dropdown, each <option value> receives name from array currencyList[] (this val is the same as in Json answer). So, this helps to get exchange rates of input1 and input2, by {window.myJsonData.rates[curr1]}, where { var curr1 = $("#sel1").val();} and {window.myJsonData = data (from ajax)}
 
 5. By clicking "Show all list", we fire {myAjax_toShowAllCurrenciesList()} and it just fires {myAjaxCurrencyRequest()}
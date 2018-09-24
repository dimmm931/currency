$(document).ready(function(){
	
	
	
	
	var currencyList = [
	    ["AED", "Дирхам ОАЭ"],
	    ["AZN", "Азербайджанский манат"],
		["BAM", "Марка Боснии и Герцеговины"],
		["BTC", "Биткойн"],
		["CHF", "Швейцарский франк"],
		["EGP", "Египетский фунт"],
		["EUR", "Евро"], 
		["GBP", "Фунт стерлингов" ], 
		["ILS", "Израильский шекель" ],
		["INR", "Индийская рупия"],
		["RUB", "Рубль"],
		["VEF", "Венесуэльский боливар"],
		["UAH", "Гривна"],
		["USD", "Доллар США"],
		["XAG" , "1 унция серебра (31 грамм)"],
		["XAU", "1 унция золота (31 грамм)"],
		["XPD", "1 унция палладия (31 грамм)"],
		["XPT" ,"1 унция платины (31 грамм)"],
    ];
	
	
	
	//generates <select><option> for From Currenccy dropdown, for Dropdown1 and dropdown2
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	   
	function generateSelectOption(selectedOption, i, spanID, textR){ //("which currency array option to set selected, 1 or 2 to add to id="sel", span to html() <select><option>, text(from or to)
	   
	    var list = '<label for="sel' + i + '">' + textR + '</label><select class="form-control" id="sel'  + i +  '">';  //<label for="sel1">From z</label><select class="form-control" id="sel1">
	    for (var i = 0; i < currencyList.length; i++){  
		    if (i==selectedOption){
				//if iteration== the value u set in {selectedOption}, we make this option selected
	            list = list + "<option value='" + currencyList[i][0] + "' selected='selected'> " + currencyList[i][0] + " - " + currencyList[i][1] + "</option>";   //<option value="AED">AED - Дирхам ОАЭ</option>
			} else {
				list = list + "<option value=" + currencyList[i][0] + ">" + currencyList[i][0] + " - " + currencyList[i][1] + "</option>";
			}
	    }
	
	    list = list + '</select>';
		$("#" + spanID).html(list);
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	//Dropdowns for From/To
	generateSelectOption( 13, 1, "Currency1_dropdown1", ""); //("which currency option to set selected, 1 or 2 to add to id="sel", span to html() <select><option>, text(from or to)
	   
	generateSelectOption( 12, 2, "Currency2_dropdown2", "To:&nbsp;");
	
	generateSelectOption( 12, 3, "Currency_Diagram_dropdown", "Currency:&nbsp;"); // Dropdown for Diagram period history
	
});
// end ready	
	
function problem5() {
	var a = document.getElementById('problemfive').value,
		digit;

		switch(a) {
			case '1' : digit = 'one'; break;
			case '2' : digit = 'two'; break;
			case '3' : digit = 'three'; break;
			case '4' : digit = 'four'; break;
			case '5' : digit = 'five'; break;
			case '6' : digit = 'six'; break;
			case '7' : digit = 'seven'; break;
			case '8' : digit = 'eight'; break;
			case '9' : digit = 'nine'; break;
			default: digit = 'not a digit'; break;  
 		}

 		document.getElementById('problemAnswerFive').innerHTML = 
 			digit;
 		console.log('Problem 5: ' + digit);	
}
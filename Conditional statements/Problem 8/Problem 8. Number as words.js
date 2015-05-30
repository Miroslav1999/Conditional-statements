function problem8() {
	var value = document.getElementById('problemeight').value,
		result;

		if (!isNaN(value) && value !== '' &&
        value * 1 >= 0 && value * 1 <= 999 &&
        ((value * 1) % 1 === 0)) {
        value *= 1;
			var hundreds = Math.floor(value % 100);
				tens = (Math.floor(value / 10)) % 10;
				digit = (value % 10);
				special = 10 + digit;

		if (tens !== 1)
		switch(digit) {
			case '1' : digit = 'one'; break;
			case '2' : digit = 'two'; break;
			case '3' : digit = 'three'; break;
			case '4' : digit = 'four'; break;
			case '5' : digit = 'five'; break;
			case '6' : digit = 'six'; break;
			case '7' : digit = 'seven'; break;
			case '8' : digit = 'eight'; break;
			case '9' : digit = 'nine'; break;
		} else {
			switch(tens) {
			case '1' : tens = 'ten'; break;
			case '2' : tens = 'twenty'; break;
			case '3' : tens = 'thirty'; break;
			case '4' : tens = 'forty'; break;
			case '5' : tens = 'fifty'; break;
			case '6' : tens = 'sixty'; break;
			case '7' : tens = 'seventy'; break;
			case '8' : tens = 'eighty'; break;
			case '9' : tens = 'ninety'; break;
		}


		switch(special) {
			case '11' : special = 'eleven'; break;
			case '12' : special = 'twelve'; break;
			case '13' : special = 'thirteen'; break;
			case '14' : special = 'fourteen'; break;
			case '15' : special = 'fifteen'; break;
			case '16' : special = 'sixteen'; break;
			case '17' : special = 'seventeen'; break;
			case '18' : special = 'eighteen'; break;
			case '19' : special = 'nineteen'; break;
		}

		switch(hundreds) {
			case '1' : hundreds = 'one hundred'; break;
			case '2' : hundreds = 'two hundred'; break;
			case '3' : hundreds = 'three hundred'; break;
			case '4' : hundreds = 'four hundred'; break;
			case '5' : hundreds = 'five hundred'; break;
			case '6' : hundreds = 'six hundred'; break;
			case '7' : hundreds = 'seven hundred'; break;
			case '8' : hundreds = 'eight hundred'; break;
			case '9' : hundreds = 'nine hundred'; break;
		}

		if ((hundreds !== 0) && ((tens !== 0) || (digit !== 0))) {
            result += "and ";
        }
    }

		if (value === 0) {
            result = "zero";
        }

        document.getElementById('problemAnswerEight').innerHTML =
        	result;
        }
}
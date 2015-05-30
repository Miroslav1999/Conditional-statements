function problem4() {
	var a = document.getElementById('problemfour-a').value,
		b = document.getElementById('problemfour-b').value,
		c = document.getElementById('problemfour-c').value,
		sorted;

		if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a % 1 === 0 && b % 1 === 0 && c % 1 === 0 && a != '' && b != '' && c != '' ) {
			if(a >= b) {
				if (b >= c) {
					sorted = a + '' + b + '' + c;
 				} else {
 					if (c >= a) {
 						sorted = c + '' + a + '' + b;
 					} else {
 						sorted = a + '' + c + '' + b;
 					}
 				}
			} else {
				if (b >= c) {
					if (a >= c) {
						sorted = b + '' + a + '' + c;
					} else {
						sorted = b + '' + c + '' + a;
					}
				} else {
					sorted = c + '' + b + '' + a;
				}
			} 

			document.getElementById('problemAnswerFour').innerHTML =
				sorted;
			console.log('Problem 4:' + sorted);	
	}
}
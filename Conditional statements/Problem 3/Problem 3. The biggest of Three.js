function problemthree() {
	var a = document.getElementById('problemthree-a').value,
		b = document.getElementById('problemthree-b').value,
		c = document.getElementById('problemthree-c').value,
		result;

if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a % 1 === 0 && b % 1 === 0 && c % 1 === 0 && a != '' && b != '' && c != '' ) {
	if (a > b) {
		result = 'a';
	} else if (a < b) {
		result = 'b';
	} else if (b < c) {
		result = 'c';
	} else if (b > c) {
		result = 'b';
	} else if (a < c) {
		result = 'c';
	} else if (a > c) {
		result = 'a';
	}

	document.getElementById('problemAnswerThree').innerHTML =
		'Result is ' + result;
	console.log('Problem 3:' + result);
	}
}
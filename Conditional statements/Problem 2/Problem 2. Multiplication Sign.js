function problem2() {
	var a = document.getElementById('problemtwo-a').value,
		b = document.getElementById('problemtwo-b').value,
		c = document.getElementById('problemtwo-c').value,
		result;

	if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a % 1 === 0 && b % 1 === 0 && c % 1 === 0 && a != '' && b != '' && c != '' ) {
		if(a === 0 || b === 0 || c === 0) {
			result = 0;
		} else if (a > 0 && b > 0 && c > 0) { 
			result = '+';
		} else if (a > 0 && b < 0 && c < 0) {
			result = '+';
		} else if (a < 0 && b > 0 && c < 0){
			result = '+';
		} else if (a < 0 && b < 0 && c > 0){
			result = '+';
		} else if (a > 0 && b > 0 && c < 0) {
			result = '-';
		} else if (a < 0 && b > 0 && c > 0){
			result = '-';
		} else if (a > 0 && b < 0 && c > 0){
			result = '-';
		} else if (a > 0 && b > 0 && c > 0){
			result = '-';
		} 

		document.getElementById('problemAnswerTwo').innerHTML = 
			'Result is ' + result;
		console.log('Problem 2:' + result);
	}
}
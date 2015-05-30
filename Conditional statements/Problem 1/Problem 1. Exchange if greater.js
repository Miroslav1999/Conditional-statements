function problem1() {
	var a = document.getElementById('problemone-a').value,
		b = document.getElementById('problemone-b').value,
		temp;

	if (!isNaN(a) && !isNaN(b) && a % 1 === 0 && b % 1 === 0 && a != '' && b != '' ) {
		if (a > b) {
			temp = a;
			a = b;
			b = temp;
		}
		document.getElementById('problemAnswerOne').innerHTML = 
			a + ' ' + b;
		console.log(a + ' ' + b);
	}
}
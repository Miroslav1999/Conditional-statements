function problem7() {
	var a = document.getElementById('problemseven-a').value,
		b = document.getElementById('problemseven-b').value,
		c = document.getElementById('problemseven-c').value,
		d = document.getElementById('problemseven-d').value,
		e = document.getElementById('problemseven-e').value,
		result;

		if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && a % 1 === 0 && b % 1 === 0 && c % 1 === 0 && d % 1 === 0 && e % 1 === 0 && a != '' && b != '' && c != '' && d != '' && e != '') {
			if (a > b) {
				if (a > c) {
					if (a > d) {
						if (a > e) {
							result = a;
						}
					}
				}
			}
			if (b > a) {
				if (b > c) {
					if (b > d) {
						if (b > e) {
							result = b;
						}
					}
				}
			}
			if (c > a) {
				if (c > b) {
					if (c > d) {
						if (c > e) {
							result = c;
						}
					}
				}
			}
			if (d > a) {
				if (d > b) {
					if (d > c) {
						if (d > e) {
							result = d;
						}
					}
				}
			}
			if (e > a) {
				if (e > b) {
					if (e > c) {
						if(e > d) {
							result = e;
						}
					}
				}
			}

			document.getElementById('problemAnswerSeven').innerHTML = 
			result;
			console.log('Problem 7: ' + result);
		}
}
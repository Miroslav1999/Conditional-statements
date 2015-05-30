function problem6() {
    var a = document.getElementById('problemsix-a').value,
        b = document.getElementById('problemsix-b').value,
        c = document.getElementById('problemsix-c').value,
        D,
        xOnlyRoot,
        xRoot1,
        xRoot2,
        result;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) &&
        a !== '' && b !== '' && c !== '' && a * 1 !== 0) {
        a *= 1; 
        b *= 1;
        c *= 1;

        D = b * b - 4 * a * c;
        xOnlyRoot = -b / (2 * a);
        xRoot1 = (-b - Math.sqrt(D)) / (2 * a);
        xRoot2 = (-b + Math.sqrt(D)) / (2 * a);

        if (D < 0) {
            result = a + "x^2 + " + b + "x + " + c + " has no real roots.";
        } else {
            if (D === 0) {
                result = a + "x^2 + " + b + "x + " + c + " has one real root x=" + xOnlyRoot;
            } else {
                result = a + "x^2 + " + b + "x + " + c + " has two real roots x1=" + xRoot1 + " and x2=" + xRoot2;
            }
        }

        document.getElementById('problemAnswerSix').innerHTML =
            result;
        console.log('Problem 6: ' + result);
    }
}
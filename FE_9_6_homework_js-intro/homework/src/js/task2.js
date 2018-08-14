var a = +prompt("Please, enter length a");
var b = +prompt("Please, enter length b");
var Y = +prompt("Please, enter angle");
var c = parseFloat((Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - (2 * b * a) * Math.cos(Y * Math.PI / 180))).toFixed(2));
var P = a + b + c;
var S = parseFloat((0.5 * (a * b * Math.sin(Y * Math.PI / 180))).toFixed(2));
console.log((a <= 0 || b <= 0 || Y <= 0) ? "Invalid data" : "c length: " + c + "\nTriangle square: " + S + "\nTriangle perimeter: " + P);

const a = +prompt('Please, enter length a');
const b = +prompt('Please, enter length b');
const Y = +prompt('Please, enter angle');
const angleSum = 180;
const squareHelper = 0.5;
const c = parseFloat(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * b * a * Math.cos(Y * Math.PI / angleSum))
    .toFixed(2));
const P = a + b + c;
const S = parseFloat((squareHelper * (a * b * Math.sin(Y * Math.PI / angleSum))).toFixed(2));
console.log(a <= 0 || b <= 0 || Y <= 0 || Y >= angleSum ? 'Invalid data' :
    `c length: ${c}
Triangle square: ${S}
Triangle perimeter: ${P}`);

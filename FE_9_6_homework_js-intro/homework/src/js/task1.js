const money = +prompt('Please, enter amount of money');
const discount = +prompt('Please, enter discount');
const saved = parseFloat((money * (dis / 100)).toFixed(2));
const withDiscount = parseFloat((money - saved).toFixed(2));
console.log(money <= 0 ? 'Invalid data' : 'Price without discount: ' + money + '\nDiscount: ' +
    +discount + '%' + '\nPrice with discount: ' + withDiscount + '\nSaved: ' + saved);


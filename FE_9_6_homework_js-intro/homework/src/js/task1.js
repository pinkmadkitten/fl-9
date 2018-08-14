const money = +prompt('Please, enter amount of money');
const dis = +prompt('Please, enter discount');
const saved = parseFloat((money * (dis / 100)).toFixed(2));
const withDiscount = parseFloat((money - saved).toFixed(2));
console.log(money <= 0 ? 'Invalid data' : 'Price without discount: ' + money + '\nDiscount: ' +
    +dis + '%' + '\nPrice with discount: ' + withDiscount + '\nSaved: ' + saved);


var money = +prompt("Please, enter amount of money");
var dis = +prompt("Please, enter discount");
var saved = parseFloat((money * (dis / 100)).toFixed(2));
var withDiscount = parseFloat((money - saved).toFixed(2));
console.log(money <= 0 ? "Invalid data" : "Price without discount: " + money + "\nDiscount: " +
    +dis + "%" + "\nPrice with discount: " + withDiscount + "\nSaved: " + saved);


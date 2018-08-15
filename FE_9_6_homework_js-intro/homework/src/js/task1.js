const money = +prompt('Please, enter amount of money');
const discount = +prompt('Please, enter discount');
const saved = parseFloat((money * (discount / 100)).toFixed(2));
const withDiscount = parseFloat((money - saved).toFixed(2));
console.log(money > 0 && discount < 100 ?
    `Price without discount: ${money} 
Discount: ${discount}% 
Price with discount: ${withDiscount} 
Saved: ${saved}` : `Invalid data`);

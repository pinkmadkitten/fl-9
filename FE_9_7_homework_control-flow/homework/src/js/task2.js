const availableAttempts = 3;
const rangeStart = 0;
let attempt = 0;
let maxPrize = 10;
let possiblePrize = maxPrize;
let prize = 0;
let question = confirm(`Do you want to play a game?`);
while (question) {
    let rangeEnd = 5;
    let randomNum = random(rangeStart, rangeEnd);
    while (question && attempt < availableAttempts) {
        console.log(randomNum);
        let userNumber = +prompt(
`Please enter the number from ${rangeStart} to ${rangeEnd}
Attempts left: ${availableAttempts - attempt}
Total prize: ${prize}$
Possible prize on current attempt: ${possiblePrize}$`);
        if (userNumber === randomNum) {
            prize += possiblePrize;
            maxPrize = maxPrize * 3;
            possiblePrize = maxPrize;
            question = confirm(`Congrats! You're prize is ${prize}$. Do you want to to continue?`);
            attempt = 0;
            rangeEnd = rangeEnd * 2;
            randomNum = random(rangeStart, rangeEnd);
        } else if (!userNumber) {
            alert(`Thank you for a game. Your prize is: ${prize}`);
            question = confirm(`Do you want to play again?`);
            attempt = 0;
        } else {
            possiblePrize = Math.floor(possiblePrize / 2);
            attempt++;
        }
    }
    if (attempt >= availableAttempts) {
        alert(`Thank you for a game. Your prize is: ${prize}`);
        question = confirm(`Do you want to play again?`);
        attempt = 0;
    }
}

if (!question) {
    alert('You did not become a millionaire, but can.');
}

function random(min, max) {
    let fixture = 1; // We add 1 in order to include max number in the range
    return Math.floor(Math.random() * (max - min + fixture) - min);
}






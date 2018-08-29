//Task 1
const magicNumbers = {
    half: 0.5,
    three: 3,
    hundred: 100
};

function userCard(number) {
    const cardInfo = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    };

    function getCardOptions() {
        return cardInfo;
    }

    function putCredits(amount) {
        cardInfo.balance = cardInfo.balance + amount;
        updateHistory('Received credits', amount);
    }

    function takeCredits(amount) {
        if (cardInfo.balance >= amount && cardInfo.transactionLimit >= amount) {
            cardInfo.balance = cardInfo.balance - amount;
            updateHistory('Withdrawal of credits', amount);
        } else if (cardInfo.balance < amount) {
            console.log(`You don't have enough money`);
        } else {
            console.log('Out of transaction limit');
        }
    }

    function setTransactionLimit(amount) {
        cardInfo.transactionLimit = amount;
        updateHistory('Transaction limit change', amount);
    }

    function transferCredits(amount, card) {
        let taxes = amount * magicNumbers.half / magicNumbers.hundred;
        let balance = cardInfo.balance;
        takeCredits(amount);
        if (balance < cardInfo.balance) {
            card.putCredits(amount - taxes);
        }
    }

    function updateHistory(operationType, credits) {
        let entry = {
            operationType,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardInfo.historyLogs.push(entry);
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

//Task 2
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length > magicNumbers.three) {
            return;
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(number) {
        return this.cards[number - 1];
    }
}

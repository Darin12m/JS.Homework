let amount = prompt('Enter the amount to withdraw:');

function atm(fullAmount) {
    let balance = 10000;

    if (amount > balance) {
        return 'Not enough money';
    } else {
        let newBalance = balance - amount;
        return `You have withdrawn ${fullAmount}. Your new balance is ${newBalance}.`;
    }
}
console.log(atm(amount));

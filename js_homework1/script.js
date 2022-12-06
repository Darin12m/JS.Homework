let allPhones = 30;
let phonePrice = 119.95;
let taxRatePercent = 5;

let onePhonePrice = phonePrice * (1 + (taxRatePercent / 100))
console.log(onePhonePrice)

let totalPhoneNumber = (onePhonePrice * allPhones);
console.log(totalPhoneNumber);
console.log("connected");

let userInput = prompt("Enter year of birth");
console.log(userInput);

let parsedInput = parseInt(userInput);
console.log(typeof userInput);

if (!Number.isNaN(parsedInput)) {

    if ((userInput - 4) % 12 === 0) {
        alert("Rat");
    }

    else if ((userInput - 4) % 12 === 1) {
        alert("Ox");

    }
    else if ((userInput - 4) % 12 === 2) {
        alert("Tiger");

    }
    else if ((userInput - 4) % 12 === 3) {
        alert("Rabbit");

    }
    else if ((userInput - 4) % 12 === 4) {
        alert("Dragon");

    }
    else if ((userInput - 4) % 12 === 5) {
        alert("Snake");

    }
    else if ((userInput - 4) % 12 === 6) {
        alert("Horse");

    }
    else if ((userInput - 4) % 12 === 7) {
        alert("Goat");

    }
    else if ((userInput - 4) % 12 === 8) {
        alert("Monkey");

    }
    else if ((userInput - 4) % 12 === 9) {
        alert("Rooster");

    }
    else if ((userInput - 4) % 12 === 10) {
        alert("Dog");

    }
    else {
        alert("Pig");

    }
}
else {
    alert("Not a valid format!");
}

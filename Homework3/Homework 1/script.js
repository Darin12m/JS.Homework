console.log("Connected");

function time(x) {
    let conversion = x * 60;
    console.log(conversion);
}
time(5);
time(3);
time(2);



/////////////////////////////////////////////////////////////////////////////// 

function addition(x) {
    let num = x += 1
    console.log(num)
}


addition(0);
addition(9);
addition(-3);
//////////////////////////////////////////////////////////

function howManySeconds(x) {
    let seconds = (x * 60) * 60;
    console.log(seconds);
}
howManySeconds(2);
howManySeconds(10);
howManySeconds(24);

///////////////////////////////////////////////////////////

function remainder(x, y) {
    let num = x % y;
    console.log(num);
}
remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);

////////////////////////////////////////////////////////////
function animals(chickens, cows, pigs) {
    let chickenLegs = chickens * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;

    let allLegs = chickenLegs + cowLegs + pigLegs;
    console.log(allLegs);
}
animals(2, 3, 5);
animals(1, 2, 3);
animals(5, 2, 8);
////////////////////////////////////////////////////////////////

function compare(string1, string2) {

    if (string1.length === string2.length) {
        return true;
    }
    else {
        return false;
    }

}
console.log(compare("AB", "CD"));
console.log(compare("ABC", "DE"));
console.log(compare("hello", "sedc"));

/////////////////////////////////////////////////////////////////////

function isPlural(changes) {

    if (changes.endsWith("s")) {
        return true;
    } else {
        return false;
    }
}
isPlural("changes");
isPlural("change");
isPlural("dudes");
isPlural("magic");
////////////////////////////
function match(string1, string2) {
    if (string1.toLowerCase() === string2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));

/////////////////////////////////////////////////

function monthName(day) {

    switch (day) {
        case 1:
            return "January";

        case 2:
            return "February";

        case 3:
            return "March";

        case 4:
            return "April";

        case 5:
            return "May";

        case 6:
            return "June";

        case 7:
            return "July";

        case 8:
            return "August";

        case 9:
            return "September";

        case 10:
            return "October";

        case 11:
            return "November";

        case 12:
            return "December";

        default: {
            "Month with that number does not exists"
            break;
        }
    }
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

/////////////////////////////////////////////////////////
function isTruthy(argument) {
    if (argument) {
        return 1;
    } else {
        return 0;
    }
}
console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(""));
console.log(isTruthy(true));
console.log(isTruthy([]));
console.log(isTruthy("false"));
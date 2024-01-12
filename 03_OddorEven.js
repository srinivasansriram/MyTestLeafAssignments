const { log } = require("console");

var number = 6;

function checkOddorEven(number) {

    if (number % 2 == 0) {

        console.log(number + " is an Even Number");
        
    }

    else

        console.log(number + " is an Odd Number");
    
}

checkOddorEven(number);
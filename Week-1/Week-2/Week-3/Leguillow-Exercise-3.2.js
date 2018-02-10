var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// variables
var testVar1 = "Bike";
var testVar2 = "Bike";
var testVar3 = "Truck";
var testVar4 = "Car";
var testVar5 = "Four";
var testVar6  = "Six";


// functions 
function match(arg1, arg2) {
    if(arg1===arg2) 
    return true
   else
   return false 
} 

function logMismatch(arg1, arg2) {
   console.log(arg1 + "and" + arg2 + "do not match!");
}

function logMatch(arg1, arg2)
console.log(arg1 + " and " arg2 + "do match!"); {
}

// six (6) test variables 



// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}
if (match(testVar3, testVar4)){ 
    logMatch(arg1, arg2)
}



// end program
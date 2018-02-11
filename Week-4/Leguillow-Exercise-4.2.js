var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];



// function
function getFruit(arr) {
    for (var k = 0; k < arr.length; k++) {
console.log(arr[k]);
    }
}


// Output from the getFruit() function
getFruit(fruits)
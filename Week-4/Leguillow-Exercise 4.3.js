var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];


// function
function getValue(arr, val) {
for(var k = 0; k < arr.length; k++){
    if (arr [k] === val)
    console.log(arr[k]);
 }
}


// Output
console.log("--DISPLAYING ARRAY ITEMS--");
for (var x=0; x < vehicles.length; x++){
    console.log(vehicles[x]);
}
// New line
console.log("");

console.log("--SELECTED VALUE--");
 getValue(vehicles, "Motorcycle");

console.log("--SELECTED VALUE--");
getValue(vehicles, "Bus");
// end program
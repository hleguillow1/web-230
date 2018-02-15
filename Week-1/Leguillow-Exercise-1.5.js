/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   15 February 2018
; Modified By: Hector Leguillow
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Hector";
var myLastName = "Leguillow";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var employeeList = "John Smith, Wayne Newton, Tom Jones, Jane Smith, Tina Turner";
 console.log(employeeList);

 var employees =[
     {
         Name: John Smith,
         Address: 123 1st Street, Anytown USA,
         Pay Rate: $13.75,
         Hire Date:  12 February 2013,

     }
     { Name:  Wayne Newton
        Address: 121 1st Street, Anytown USA,
        Pay Rate: $14.00,
        Hire Date: 1 January 2010

     }
     {Name:  Tom Jones,
        Address: 120 2nd  Street, Anytown USA,
        Pay Rate: $15.00,
        Hire Date: 30 January 2009

     }
     {Name:  Jane Smith,
        Address: 21 Second Street, Anytown USA,
        Pay Rate: $16.00,
        Hire Date: 16 September: 2013

     }
     {
        Name:  Tina Turner
        Address: 111 Rock Street, Anytown USA,
        Pay Rate: $20.00,
        Hire Date:1 December 2010
     }

 ];
  
employees.foreach(function(employees){
    console.log(
        "Name;" + Addresss +" + Payrate +" "+ Hire Date";
    

})







 // end of program 

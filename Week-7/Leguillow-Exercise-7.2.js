var header = require('../header.js');

/*
 Expected output:

 Hector Leguillow
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function Employee(id, firstName, fastName, title)

{
 this.id =id;
this.firstName = firstName;
this.lastName =lastName;
this.title = title;
}
var employees =[];




employees[0] = new Employee(1, "Thomas"," Edison", "Software Engineer");
employees[1] = new Employee(2, "Benjamin"," Franklin", "Programer");
employees[2] = new Employee(3, "Nikola"," Tesla", "Project Manager");
employees[3] = new Employee(4, "Charles"," Babbage", "Product Manager");
employees[4] = new employee(5, "Alexander"," Bell", "Business Analyst");


for(var k = 0; k < employee.length; k++)

{
    var emp = employees[k];
console.log(emp.id + " " + empl.firstName + ""  +emp.lastName + " " + emp.title); 
}

// end program
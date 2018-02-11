var header = require('../header.js'); 

// start program

/*
    Expected output:

    Hector Leguillow
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;


switch(eventKeyCode);
{
    case 13:
    console.log("the enter key was pressed");
    break;
    case 16:
    console.log("the shift key was pressed");
    break;
    case 32:
    console.log("the spacebar was pressed");
    break;
    case 8:
    console.log("backspace / delete key was pressed");
    break;
    default: console.log("unrecognized key pressed");
    break;

}


// end program 
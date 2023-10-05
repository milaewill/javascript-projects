const input = require('readline-sync');
let str = "LaunchCode";

let numOfLetters = input.question("How many letters will you be relocating? ");

if (numOfLetters > str.length || numOfLetters < 1) {
    console.log(`You wamted to relocate ${numOfLetters}, but ${str} is only ${str.length} letters!, so we relocated 3 letters for you! `);
    numOfLetters = 3;
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(numOfLetters) + str.slice(0, numOfLetters);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original word ${str} is now been changed to ${newStr}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

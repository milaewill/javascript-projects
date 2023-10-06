let num = 1001.3;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let numAsString = num.toString();
let length = numAsString.length;

console.log(length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let newNum = 123.45
let newNumAsString = newNum.toString();
let newLength = newNumAsString.length;

console.log(newLength);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')) {
    console.log(String(num).length - 1)
} else {
    console.log(String(num).length)
}

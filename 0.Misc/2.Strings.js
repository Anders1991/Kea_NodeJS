// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log((parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2));
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let total = one + two + three;
let average = total/3;
console.log(average.toFixed(5));

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

Letter_C = letters.charAt(2);

console.log(Letter_C);
// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replacement = fact.replace("javascript","Javascript");

console.log(replacement);
// --------------------------------------




// variables and data types

let stuName = "Ty";
let age = 20;
let isStudent = true;

console.log(typeof stuName,typeof age, typeof isStudent)
console.log(stuName, age, isStudent);

// basic arithmetic operations

let num1 = 10;
let num2 = 5;

console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2,);

// working with strings

let sentence = "I am a butterfly!";

console.log(sentence.length, sentence.at(0), sentence.at(sentence.length - 1));

// math object

let negative = -1;

console.log(Math.sqrt(negative), Math.pow(negative, 2), Math.abs(negative))

// boolean logic and comparison operators

let num3 = 1;
let num4 = 2;

console.log(num3 > num4, num3 == num4, num3 < num4);

// logical operators

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2, bool1 || bool2, !(bool1 && bool2));

// using template literals

let fName = "Ty";
let lName = "Raulston";

console.log(`Hello! My name is ${fName} ${lName}. Nice to meet you!`);
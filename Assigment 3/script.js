"use strict";
// Challenge 1 - Type Conversion

let num = "10";
console.log(typeof num, num);
num = Number(num);
console.log(typeof num, num, (num + 10));

// Comments - I understand that you must set the variable equal to Number(). That statement alone doesn't execute.
// Also, numbers and string show up as different colors in the console.

// Challenge 2 - Type Coercion

let strNum = "10";
let num2 = 10;
let add = strNum + num2;
let minus = strNum - num2;
let times = strNum * num2;
console.log(typeof add, add, typeof minus, minus, typeof times, times);

// Comments - Addition squishes numbers and strings together into one string without real addition. 
// Minus actually subtracts and makes a number. Same with multiplication.

// Challenge 3 - True and False Values

let nonEmptyStr = "String";
let emptyStr = "";
let zero = 0;
let posNum = 1;
let none = null;
let unDef = undefined;
console.log(Boolean(nonEmptyStr), Boolean(emptyStr), Boolean(zero), Boolean(posNum), Boolean(none), Boolean(unDef));

// Comments - True seems to only happen with positive numbers and non empty strings. Anything else produces a false Boolean value.

// Challenge 4 - if/else

let age = 20;
if (age > 17)
    console.log('You are eligible');
else
    console.log('You are not eligible');

age = 17;
if (age > 17)
    console.log('You are eligible');
else
    console.log('You are not eligible');

// Comments - This one is pretty straight forward. If checks the statement. If true then it runs, otherwise it runs the else section.

// Challenge 5 - else if

let grade = 90;
if (grade > 89)
    console.log('A');
else if (grade > 79)
    console.log('B');
else if (grade > 69)
    console.log('C');
else if (grade > 59)
    console.log('D');
else
    console.log('F');

grade = 59;
if (grade > 89)
    console.log('A');
else if (grade > 79)
    console.log('B');
else if (grade > 69)
    console.log('C');
else if (grade > 59)
    console.log('D');
else
    console.log('F');

grade = 70;
if (grade > 89)
    console.log('A');
else if (grade > 79)
    console.log('B');
else if (grade > 69)
    console.log('C');
else if (grade > 59)
    console.log('D');
else
    console.log('F');

// Comments - else if adds compounding if statements. Multiple checkers going down the list in order until one statement is made true or the final else statement is run.

// Challenge 6 - switch

let service = 'parking';
switch (service) {
    case 'parking': console.log('parking is available');
        break;
    
    case 'library': console.log('your book is ready');
        break;

    case 'tutoring': console.log('avaiable monday - friday');
        break;
    
    case 'technology': console.log('computers avaiable in custer hall');
        break;

    default: console.log('not a service.');
        break;
}

service = 'technology';
switch (service) {
    case 'parking': console.log('parking is available');
        break;
    
    case 'library': console.log('your book is ready');
        break;

    case 'tutoring': console.log('available monday - friday');
        break;
    
    case 'technology': console.log('computers avaiable in custer hall');
        break;

    default: console.log('not a service.');
        break;
}

service = 'fhsu';
switch (service) {
    case 'parking': console.log('parking is available');
        break;
    
    case 'library': console.log('your book is ready');
        break;

    case 'tutoring': console.log('avaiable monday - friday');
        break;
    
    case 'technology': console.log('computers avaiable in custer hall');
        break;
        
    default: console.log('not a service.');
        break;
}

// Comments - Switch is like an if else statement. It checks each statement for a match but if it doesn't it runs the last else/default statement.

// Challenge 7 - Ternary Operator

let isLoggedIn = true;
console.log(isLoggedIn == true ? 'Welcome back!' : 'Please log in.');

isLoggedIn = false;
console.log(isLoggedIn == true ? 'Welcome back!' : 'Please log in.');

// Comments - This is a faster or easier way to write an if else statement. However, I believe it's harder to read so it's less intuitive to the normal eye. You have to look at it for a second to understand it.

// Challenge 8 - Student Status Program

let stuName = 'Jerry';
let age2 = 21;
let score = 43;
let major = 'Business';
let enrollment = false;

let adult;
let grade2;
let enrolled = enrollment == true ? 'Enrolled' : 'Not Enrolled';

if (age2 > 17)
    adult = 'Yes';
else
    adult = 'No';

if (score > 89)
    grade2 = 'A';
else if (score > 79)
    grade2 = 'B';
else if (score > 69)
    grade2 = 'C';
else if (score > 59)
    grade2 = 'D';
else
    grade2 = 'F';

console.log(`Student: ${stuName}
    Age: ${age2}
    Major: ${major}
    Adult: ${adult}
    Score: ${score}
    Grade: ${grade2}
    Status: ${enrolled}`);

// Comments - This put everything together besides the switch which is like an if else anyway. 
// Also got a refresh on the template literals. Didn't know they automatically added new lines when you organize them that way in js.
// Fund

console.log(`-------------- Variables --------------`);
// variables
var a = 10;
let b = 10
const name = "hari"

// console.log(`${a}`, `${b}`,`${name}`);

console.log(`-------------- Data Types --------------`);
// Data Types:
let number = 9;
const userName = "Sree";
let isUserGood = true;
let userGrade = null;
// let num = undefined;
let num = 1
console.log(`${number}, ${userName}, ${isUserGood}, ${userGrade}, ${num}`);

// OPERATORS
console.log(`-------------- OPERATORS --------------`);
// Assignment

let num1 = 10;
let num2 = 5;
// Addition Assignment	a+=b	a=a+b
let num3 = num1 + num2
console.log(num3);

// Subtraction Assignment	a -= b	a = a - b
let subNum = num1 - num2;
console.log(subNum);

// Multiplication Assignment	a *= b	a = a * b
console.log(num1 * num2);

// Division Assignment	a/=b	a=a/b
console.log(num1 / num2);

// Remainder Assignment	a%=b	a=a%b
console.log(num1 % num2);


// Control Flow
console.log(`-------------- Control Flow --------------`);
if (true) {
     console.log(`Hi`);    
}

let bool = true

if (bool) {
     console.log(`${num}`);
} else {
     console.log(`No`);
}

switch (bool) {
     case 0:
          console.log(1);
          

     default:
          console.log(`Level`);
          break;
}

console.log(`-------------- Functions --------------`);
// Functions
function greetUser(userName1) {
     console.log(`Hi,${userName1}`);
     return ;
}
greetUser('shiva')

// Arrays
console.log(`-------------- Arrays --------------`);

let nums = [1, 2, 3, 4, 5];
// nums.push()
console.log(nums.length);
console.log(nums.push(6));
console.log(nums.pop());
console.log(nums.shift());
console.log(nums.unshift(6));



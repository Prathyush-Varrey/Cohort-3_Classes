/** 
Objects ->
`Objects` are a collection of `key-value pairs`.where `key`is a string and 
`value` can be data, including another object.

**/

// Objects
console.log(`-------------- Objects --------------`);
let userData = {
     userName: `Prathyush`,
     userAge: `24`,
}
// console.log(`userData : ${userData.userName}, age : ${userData.userAge}`);

// Write a function that takes a user as an input and greets them with their name and age
function greetUser(user) {
     console.log(`Hi, ${user.userName}, your  age is ${user.userAge}`);
}
greetUser(userData);

// Write a function that takes a new object as
// input which has name , age  and gender and greets
// the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
let newUserData = {
     userName: `Harkirat`,
     useAge: `21`,
     userGender :`Male`
}
function greetUserByGender(newUserData) {
     if (newUserData.userGender === 'Male' && newUserData.userAge > 18) {
          console.log(`Hi Mr.${newUserData.userName}, your age is ${newUserData.useAge} and you are eligible for voting`);
     } else if (newUserData.userGender === 'Female' && newUserData.userAge > 18) {
          console.log(`Hi Mrs.${newUserData.userName}, your age is ${newUserData.useAge}`);
     } else {
          console.log(`Hi ${newUserData.userName}, your age is ${newUserData.useAge}`);
     }
}
greetUserByGender(newUserData);
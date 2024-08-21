// /*Create a variable for each of the following: your favorite color,
// your height in centimeters, and whether you like pizza.
// Use appropriate variable declarations (let, const, or var). Try logging it using console.log */
// function demoassignment() {
//     var color = "black";
//     let height = 180;
//     const pizza = false;
//     console.log(color);
//     console.log(height);
//     console.log(pizza);
// }
// demoassignment();
// let age = 12;
// let age2 = "12";
// if(age === age2) {
//     console.log("hi");
// } else console.log("bye");
// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

// function sum(x,y) {
//     return x + y;
// }
// let result = sum("ali","saif");
// console.log(result);

// function canVote(age) {
//     if(age > 18) {
//         return true;
//     } else return false;
// }
// let result = canVote(17);
// console.log(result);
// const readline = require('readline');
// const readInput = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readInput.question("please enter a number", (num) => {
//     const n = parseInt(num, 10);
//     if(n % 2 == 0) console.log("Its a even no");
//     else console.log("Not even");
//     readInput.close;
// })
// function sum(n) {
//     let s = 0;
//     for(let i = 0; i < n ; i++) {
//         s += i;
//     }
//     console.log(s);
// }
// sum(10);

// function greet(user) {
//     if(user.gender === "male") console.log("Hi Mr" + user.name + "your age is" + user.age);
// }
// const user = {
//     name: "saif",
//     age: 20,
//     gender: "male"
// }
// greet(user);

function arrOfobj(persons) {
  const man = [];
  for(const person of persons) {
    if(person.gender === "male") {
      man.push(person);
    }
  }
  console.log(man);
}
const users = [
  {
    firstName: "saif",
    age: 20,
    gender: "male",
  },
  {
    firstName: "saad",
    age: 14,
    gender: "male",
  },
  {
    firstName: "priya",
    age: 19,
    gender: "female",
  },
];
arrOfobj(users);

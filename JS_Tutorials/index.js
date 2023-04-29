// const x = 1;
// function callEx() {
//   console.log(x);
//   const x = 2;
// }
// callEx();

// kebab_case

// const first_name = "Hamza";

// //CamelCase

// const firstName = "Hamza";
// const FirstName = "Hamza";

//Template Literals

// let newString = "My name is " + firstName;
// let newTemplateString = `My name is ${firstName}`;

// console.log(newString);

//Parsing
// let newObject = {
//   name: "Hamza",
//   age: 25,
//   address: "Lahore",
// };

// let objectForm = JSON.stringify(newObject);
// let newObjectForm = JSON.parse(objectForm)

// console.log(newObjectForm);

// shallow copy and Deep copy
// const originalArray = [1, 2, { a: 3 }, 4];
// const shallowCopy = Array.from(originalArray);
// console.log(shallowCopy === originalArray);
// console.log(shallowCopy[0] === originalArray[0]);
// shallowCopy[2].a = 4;
// console.log(originalArray);

// const originalArray = [1, 2, { a: 3 }, 4];
// let deepCopy = JSON.parse(JSON.stringify(originalArray));
// console.log("this is deep copy", deepCopy);
// console.log(deepCopy === originalArray);
// console.log(deepCopy[0] === originalArray[0]);
// deepCopy[2].a = 4;
// console.log("this is new deep copy", deepCopy);
// console.log("this is original array", originalArray);

// Simple Javascript Function
// function getUsers() {}

// Fat Arrow function (ES6)
// const getUsers = () => {};

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const toString=fruits.join(' * ')
// console.log(toString)

//  fruits.pop()

// fruits.push('carrot')

// fruits.shift()

// fruits.unshift('carrot')

// const arayElement = fruits[1]

// const arrayLength =fruits.length

// const arr1  =[1,2,3]

// const newArray = fruits.concat(arr1)

// fruits.splice(2, 0, "Lemon", "Kiwi");

// const newArray = fruits.slice(1,2)

// fruits.sort()

// fruits.reverse()

// const person = [
//   {
//     name: "Sumaira",
//     address: "FSD",
//   },
//   {
//     name: "Asma",
//     address: "FSD",
//   },
//   {
//     name: "Hamza",
//     address: "LHR",
//   },
// ];

// fruits.forEach((val, index) => {
//   console.log(val, index);
// });

// person.forEach((val) => {
//   console.log(val.name, val.address);
// });

// const newArray = person.map((val) => {
//   return val;
// });

// const newArray = person.filter((val) => {
//   if (val.address === "LHR") {
//     return val;
//   }
// });

// const x= 10
// const y = '10'

// console.log(x===y)
// console.log(x==y)

// console.log(newArray);

// console.log(fruits)

// const array1 = [1, 2, 3, 4, 5];

// let sum = array1.reduce((acc, num) => {
//   return acc + num;
// });

// acc = 0, num =1 => 0+1 =>1
// acc = 1, num = 2 => 1+2 => 3
// acc = 3, num = 3 => 3+3 => 6
// acc = 6, num = 4 => 6+4 => 10
// acc = 10, num = 5 => 10+5 => 15

// console.log(sum)

// const newArray = person.every((val) => {
//   if (val.address === "FSD") {
//     return val;
//   }
// });

// const newArray = person.some((val) => {
//   if (val.address === "FSD") {
//     return val;
//   }
// });

// let index =  fruits.indexOf('Apple')
// console.log(index)

// const newArray = person.find((val) => {
//   if (val.address === "FSD") {
//     return val;
//   }
// });

// Closures

// function outerFunction(x) {
//   // x= 10
//   // y=5

//   function innerFunction(y) {
//     return x + y;
//   }

//   return innerFunction;
// }
// const closure = outerFunction(10);
// console.log(closure(5));

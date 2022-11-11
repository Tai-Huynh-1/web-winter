// let & var will let you declared / initialize a variable without assigning a value
// = is used to assign value (assignment operator)
var myName = "Tai"; // string
let age = 10; // number
const email = "tai@gmail.com";
let active = true; // boolean
let membership; // undefined => variable declared / initialized, but no value has been assigned yet
const date_created = null; // null

// console.log("myName", myName);
// console.log("age", age);
// console.log("email", email);
// console.log("active", active);
// console.log("membership", membership);
// console.log("date_created", date_created);
// 5 JS primitive types: string, number, boolean, undefined, null

let age2 = "10";

// == & === are comparison operator
// console.log("line 21", age === age2); // === strict type comparison will check type first
// console.log("line 22", age == age2); // == will perform type coercion then check value

// variable reassignment with =
myName = "Jack";
age = "random string";
// email = "random@gmail.com";

console.log("myName", myName);
console.log("age", age);
// console.log("email", email);

// let & var can be reassigned
// const cannot be reassigned
var a;
console.log(a);

// need to pick up on hoisting and typeof & 2 phases

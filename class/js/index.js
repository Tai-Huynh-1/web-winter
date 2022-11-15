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

// let age2 = "10";

// == & === are comparison operator
// console.log("line 21", age === age2); // === strict type comparison will check type first
// console.log("line 22", age == age2); // == will perform type coercion then check value

// variable reassignment with =
// myName = "Jack";
// age = "random string";
// email = "random@gmail.com";

// console.log("myName", myName);
// console.log("age", age);
// console.log("email", email);

// let & var can be reassigned
// const cannot be reassigned
// var a;
// console.log(a);

// need to pick up on hoisting and typeof & 2 phases
// hoisting - only 'var' & functions declared with 'function' keyword gets hoisted
// hoisted 'var' will always give 'undefined' if accessed before init
// const and let cannot be access before initialization - AND you get ERROR and code ends
// console.log("hoisted let", hoistedLet);
// console.log("hoisted const", hoistedConst);
// let hoistedLet = "my hoisted let";
// const hoistedConst = "my hoisted const";

// JS phase: 1. memory allocation 2. execution phase
// console.log("hoisted var", hoistedVar);
// var hoistedVar = "my hoisted var";
// console.log("after init", hoistedVar);
// hoistedVar = 10;
// console.log("end", hoistedVar);

// function using 'function' keyword gets hoisting & WORK (unlike var, where you get 'undefined')
// generateLine(2, 5);
function generateLine(x, b) {
	const a = 5;
	// main logic of function
	console.log("running my function");
	return 1 * x + b;
}
// invoke / call / execute the function
// const myReturnedValue = generateLine(2, 5);

// arrow functions DOES NOT get hoisted if stored in let or const (unless with var, but it is still 'undefined')
var generateNum = (num) => 10 * num;

const arr = [1, 2, 3];

arr.forEach((num) => {});

console.log(generateNum(10));
// console.log(typeof generateNum);
// console.log(typeof generateLine);
// call stack / stack memory
// primitives get stored in stack memory

// copy by reference vs copy by value || pass by reference vs pass by value
const gen2 = generateNum;
console.log(generateNum === gen2);

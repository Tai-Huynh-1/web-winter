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
generateLine(2, 5);
function generateLine(x, b) {
	const a = 5;
	// main logic of function
	console.log("running my function");
	return 1 * x + b;
}
// invoke / call / execute the function
// const myReturnedValue = generateLine(2, 5);

// arrow functions DOES NOT get hoisted if stored in let or const (unless with var, but it is still 'undefined')
// console.log(generateNum2);
// var generateNum = (num) => 10 * num;

// var generateNum2 = function (num) {
// 	return 20 * num;
// };

// const arr = [1, 2, 3];

// arr.forEach((num) => {});

// console.log(generateNum2(10));
// console.log(typeof generateNum);
// console.log(typeof generateLine);
// call stack / stack memory
// primitives get stored in stack memory

// JS: copy & compare by reference vs copy & compare by value || pass by reference vs pass by value

// copy by value & compares by value (for primitive values ONLY)
let a = 5;
// console.log("a", a); // 5
let b = a; // real duplicate copy (stored in a different memory address / location) (copy by value)
let c = 5;
// console.log("b", b); // 5
// console.log("a === b", a === b); // true (comparison by value)
// a = 10;
// console.log("2nd a", a); // 10
// console.log("2nd b", b); // 5
// console.log("a === b", a === b); // false
// console.log("b === c", b === c);

// objects, arrays, functions (these get stored in memory heap) - these get copy by reference & compared by reference (the data structure memory location)
let arrA = [a]; // arrA memory location arrA = XXX123
let arrB = arrA; // arrB = XXX123
let arrC = [a]; // arrC memory location arrC = 789ABC
// console.log("arrA", arrA); // [5]
// console.log("arrB", arrB); // [5]
// console.log("arrC", arrC); // [5]
// console.log("arrA === arrB", arrA === arrB); // false sukh/sai - true har/tai (we copied by reference so comparing by reference returns true)
// console.log("arrA === arrC", arrA === arrC); // true sukh/har/sai - false tai (here we created a new array with diff. address for arrC)
// console.log("arrA[0] === arrC[0]", arrA[0] === arrC[0]); // true har/sukh/sai

// disk (library) (persistent storage - single source truth) - RAM (bookshelf) (cache storage - non-permanent)

// array are sensitive to their order (index)
const arrZ = [1, 2, 2, 2, 2, 3, 4, 5, 5, 10, 100, 100];
// arrZ[0] = 1000;
// arrZ.push(1000);
// for loop
// for (let i = 0; i < arrZ.length; i++) {
// 	console.log(arrZ[i]);
// }

// const arrG = []
// arrZ.forEach((element, index) => {
// 	console.log(`arrZ at index ${index} is ${element}`);
// 	arrG.push(element)
// });

// function mapOverArray(array) {
// 	const result = array.map((element) => {
// 		return element * 100;
// 	});

// 	return result;
// }

// const r = mapOverArray(arrZ);
// console.log(r);

// objects are collections of key / value pairs
const user = {
	name: "Jake",
	email: "jake@sf.com",
	age: 25,
};
// dot notation & bracket notation to access / read properties inside objects
// const nameVar = "name";
// console.log(user[nameVar]);
// dot notation & bracket notation to write to objects
// console.log(user);
// user.id = 1;
// Object.freeze(user);
// user["id"] = 100;
// console.log(user);
// update with dot & bracket notation as well
// user.idx = 50;
// console.log(user);
// delete
// delete user.id;
// FOR ... IN loop to iterate over keys / properties of an OBJECTS
// for (const key in user) {
// 	console.log(`key: ${key} -- value: ${user[key]}`);
// }

// FOR ... OF loop for arrays (again)
// for (const element of arrZ) {
// 	console.log(element);
// }

// SETS are like arrays, but elements inside are unique
// const arrZ = [1, 2, 2, 2, 2, 3, 4, 5, 5, 10, 100, 100] => [1, 2, 3, 4, 5, 10, 100]
// write a function called filterForUniques(inputArray) that will take an input array and return a new array with only unique values of the original array
// function filterForUniques(inputArray) {
// 	const ans = new Set();
// 	for (const element of inputArray) {
// 		ans.add(element);
// 	}
// 	return ans;
// }
// console.log(filterForUniques(arrZ));
const nestArr = [
	[4, 5, 6, 7],
	[7, 9, 8, 7],
];
for (let i = 0; i < nestArr.length; i++) {
	// nestArr[0] = [4, 5, 6, 7]
	for (let j = 0; j < nestArr[i].length; j++) {
		console.log(nestArr[i][j]);
	}
}

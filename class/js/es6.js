// import name1 from "./variables";

// declare functions using function
function myFunc() {
	// logic / computation
	return;
}

// declare a function as a method (inside of an object)
// Note: we should use regular function signatures (not arrow functions) for methods
const cat = {
	name: "Tom",
	// greet method written with function name as "key"
	greet: function () {
		console.log("meow");
	},

	// es6 method notation
	getName() {
		return this.name;
	},

	// arrow function as a method (ES6 feature) (for example)
	getNameArrow: () => {
		return this.name;
	},
};

// anonymous functions
// const arr = []
// arr.forEach(() => {})

const dog = {
	name: "Ruff",
};

const name = "Jerry";

// const getNameOutside = cat.getName;
const getNameOutside = cat.getName.bind(dog);
// bind(), call() and apply() are function methods used to provide a proper "this" reference to your function
// console.log(getNameOutside());
// console.log("this", this);
// console.log(cat.getNameArrow());

// constructor and prototype - class (ES6)

const ford = {
	brand: "Ford",
	year: 1990,
	car: "red",
	numberOfWheels: 4,
};

const toyota = {
	brand: "Toyota",
	year: 1991,
	car: "blue",
	numberOfWheels: 4,
};

// constructor function in JS
function Car(brand, year, color) {
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.numberOfWheels = 4;
}

// instance means a specific example of the constructor / class
// the act of doing so is called "instantiation"
const tesla = new Car("Tesla", 2020, "white");
// console.log(tesla);

const arrB = new Array();
// console.log(arrB);

const objB = {};

// check whether an obj is a JS object or an array
// typeof doesn't tell us what we want to know
// console.log(typeof arrB);
// console.log(typeof objB);

// 1 way to check is by checking the constructor function used to create the object
// console.log(arrB.constructor.name === "Array");
// console.log(objB.constructor.name === "Object");

// 2nd way to check is using "instanceof" method
// notation: objectToCheck instanceof constructorName
// console.log(arrB instanceof Array);
// console.log(objB instanceof Object);
// Array.isArray(arrB) // static method

// class (ES6)
class Animal {
	// private variable uses # (encapsulation)
	#type;

	constructor(name, age, type) {
		this.name = name; // custom properties
		this.age = age; // custom properties
		this.#type = type;
		this.tag = true; // hard-coded properties
	}

	// static method allows a class method to be called without instantiating the class
	static logClassName() {
		console.log("This is the Animal class");
	}

	// methods
	greet() {
		console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
	}

	// setter & getter methods to modify instance variables (encapsulation)
	getType() {
		return this.#type;
	}

	setType(type) {
		this.#type = type;
	}
}

const tom = new Animal("Tom", 10, "cat");
// console.log(tom);
// tom.greet();

// testing encapsulation
// console.log(tom.getType());
// tom.setType("dog");
// console.log(tom.getType());

// Animal.logClassName(); // calling our static method

// inheritance & prototype
class Vehicle {
	constructor(brand, year, color, wheels) {
		this.brand = brand;
		this.year = year;
		this.color = color;
		this.numberOfWheels = wheels;
	}

	// beep method
	honk() {
		console.log("Beep Beep");
	}
}

// inheritance by extending properties and methods from a super class
class SUV extends Vehicle {
	#type;

	constructor(brand, year, color, wheels) {
		super(brand, year, color, wheels); // super invokes the constructor from the super class (parent class)
		this.#type = "suv";
		this.seats = 7;
	}

	getSeats() {
		return this.seats;
	}

	static getType() {
		return this.#type;
	}

	// polymorphism (poly = "many", morphism = "form") - overriding superclass methods
	honk() {
		console.log("SUV Honking");
	}
}

class Sedan extends Vehicle {
	#type;

	constructor(brand, year, color, wheels) {
		super(brand, year, color, wheels);
		this.#type = "sedan";
		this.seats = 5;
	}

	static getType() {
		return this.#type;
	}
}

class Coupe {
	constructor(brand, year, color, wheels) {
		this.brand = brand;
		this.year = year;
		this.color = color;
		this.numberOfWheels = wheels;
	}
}

const suv1 = new SUV("toyota", 2020, "white", 4);
suv1.honk();

const coupe1 = new Coupe("toyota", 2000, "white", 4);
// coupe1.honk();

// ES6 Immediately Invoked Function Expressions (IIFE)
// (function () {
// 	console.log("My IIFE");
// })();

// Default Parameters for functions
function muliply(a = 1, b = 1) {
	return a * b;
}

// Rest parameters for passing in an unspecified amount of arguments
// Your function packages the arguments into an "args" array
function restParams(...args) {
	console.log(args);
	args.forEach((arg) => console.log(arg));
}
// restParams(1, 3, 4, "string", true);

// Spread operator (shallow copy)
const arrY = [100, 800];
const arrZ = [1, 2, [44, 55]];
const arrU = [...arrY, arrZ];
// console.log(arrU); // [100, 800, [1, 2]]
// arrZ[0] = 999;
// console.log(arrU); // [100, 800, [999, 2]]
// arrY[0] = 555;
// console.log(arrU); // [100, 800, [999, 2]]

const obj1 = {
	firstName: "Jack",
	lastName: "Sparrow",
};
const obj2 = { ...obj1 };
// console.log(obj2);

// array & object destructuring (es6+)
const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	address: {
		mailingAddress: "123 Wall St.",
		shippingAddress: "321 Main St.",
	},
};

// console.log(user.address.mailingAddress);
// console.log(user.address.shippingAddress);

// using object destructuring / deep destructuring & aliasing
const firstName = "Anna";
const {
	address: { mailingAddress: mailingAlias, shippingAddress }, // destructure a second time
	lastName, // destructuring the first time
	firstName: userFirstName, // destructuring & renaming firstName to userFirstName so it does not conflict with other variables with same name
} = user;

// console.log(mailingAlias);

// array destructuring
const items = ["envelopes", "utensils", "milk", { mailingAddress: "123 Wall St.", shippingAddress: "321 Main St." }];
const [, , milk, addresses] = items;
// console.log(envelopes);
// console.log(utensils);
// console.log(milk);
// console.log(addresses);

// modules / export / import
// console.log(name1);

// looping over objects (other methods)
for (const key in user) {
	console.log(key);
}

console.log("=======================");

const userKeys = Object.keys(user);
const userValues = Object.values(user);
const userEntries = Object.entries(user);
// console.log(userKeys);
// console.log(userValues);
// console.log(userEntries);
// userKeys.forEach((key) => console.log(user[key]));

// pure function (functional programming)
// a pure function should not have any side effects & outputs from the function should depend on the inputs given to it

function cloneArray(array) {
	const result = [...array];
	return result;
}

function customPop(array) {
	const result = [...array];
	result.pop();
	return result;
}

console.log("items before", items);
console.log(customPop(items));
console.log("items after", items);

// chaining methods
const str = "     congratulations   ".trim();
console.log(str);

// const strArray = str.split("").reverse();

// console.log(strArray.join(""));

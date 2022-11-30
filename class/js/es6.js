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

// class (ES6)
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.tag = true;
	}
}

const tom = new Animal("Tom", 10);
console.log(tom);

// inheritance & prototype

import React from "react";

const PizzaStore = () => {
	const handleSetPepperoni = () => {
		// set the value of pepperoni pizza in stock
		// then reset the input field to 0 (default should be 0)
	};

	return (
		<div>
			<h1>Pizza Store</h1>
			{/* Make this dynamic based on the isOpen property of pizza store */}
			<h2>The store is _____</h2>
			<h3>Pepperoni Pizzas in stock: ___</h3>
			<h3>Combo Pizzas in stock: ___</h3>
			<h3>Cheese Pizzas in stock: ___</h3>

			<button>Open & Close Shop</button>
			<br />
			<br />

			<label>
				Amount to stock: <input type="number" />
			</label>

			<br />
			{/* This will set the amount of pepperoni pizza in stock for the day */}
			<button>Set pepperoni pizzas</button>
			<br />
			{/* This will set the amount of combo pizza in stock for the day */}
			<button>Set combo pizzas</button>
			<br />
			{/* This will set the amount of cheese pizza in stock for the day */}
			<button>Set cheese pizzas</button>
			<br />
			<button>Reset All</button>
		</div>
	);
};

export default PizzaStore;

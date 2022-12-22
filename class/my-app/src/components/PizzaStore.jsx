import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openClose, resetAll, setCheese, setCombo, setPepperoni } from "../redux/pizza/pizzaActions";

const PizzaStore = () => {
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();
	const pizzaStore = useSelector((state) => state.pizza);

	const handleChange = (e) => {
		setQuantity(e.target.value);
	};

	const handleOpenClose = () => {
		dispatch(openClose());
	};

	const handleSetPizzas = (e) => {
		const { name } = e.target;
		// set the value of pizza in stock
		const action = name === "pepperoni" ? setPepperoni(quantity) : name === "combo" ? setCombo(quantity) : setCheese(quantity);

		// let action;
		// if (name === "pepperoni") {
		// 	action = setPepperoni(quantity);
		// } else if (name === "combo") {
		// 	action = setCombo(quantity);
		// } else {
		// 	action = setCheese(quantity);
		// }

		dispatch(action);

		// then reset the input field to 0 (default should be 0)
		setQuantity(0);
	};

	const handleResetAll = () => {
		const action = resetAll();
		dispatch(action);
	};

	return (
		<div>
			<h1>Pizza Store</h1>
			{/* Make this dynamic based on the isOpen property of pizza store */}
			<h2>The store is {pizzaStore.isOpen ? "Open" : "Closed"}</h2>
			<h3>Pepperoni Pizzas in stock: {pizzaStore.pepperoni}</h3>
			<h3>Combo Pizzas in stock: {pizzaStore.combo}</h3>
			<h3>Cheese Pizzas in stock: {pizzaStore.cheese}</h3>

			<button onClick={handleOpenClose}>Open & Close Shop</button>
			<br />
			<br />

			<label>
				Amount to stock: <input name="quantity" type="number" value={quantity} onChange={handleChange} />
			</label>

			<br />
			{/* This will set the amount of pepperoni pizza in stock for the day */}
			<button name="pepperoni" onClick={handleSetPizzas}>
				Set pepperoni pizzas
			</button>
			<br />
			{/* This will set the amount of combo pizza in stock for the day */}
			<button name="combo" onClick={handleSetPizzas}>
				Set combo pizzas
			</button>
			<br />
			{/* This will set the amount of cheese pizza in stock for the day */}
			<button name="cheese" onClick={handleSetPizzas}>
				Set cheese pizzas
			</button>
			<br />
			<button onClick={handleResetAll}>Reset All</button>
		</div>
	);
};

export default PizzaStore;

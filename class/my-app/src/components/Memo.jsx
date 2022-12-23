import React from "react";
import { useState, useMemo } from "react";

const generateRandom = () => Math.floor(Math.random(10) * 10);

const Memo = () => {
	const [toggle, setToggle] = useState(false);

	const luckyNumbers = useMemo(() => new Array(6).fill(1).map(() => generateRandom()), []);

	// const luckyNumbers = new Array(6).fill(true).map(() => generateRandom());

	const handleReroll = () => setToggle(!toggle);

	return (
		<div>
			<h1>Memo</h1>
			<h2>{JSON.stringify(luckyNumbers)}</h2>
			<h2>{toggle ? "True" : "False"}</h2>
			<button onClick={handleReroll}>Reroll</button>
		</div>
	);
};

export default Memo;

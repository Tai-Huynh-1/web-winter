import { useState, useEffect } from "react";

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

const initDate = new Date();

const ClockB = () => {
	const [date, setDate] = useState(initDate);

	const tick = () => {
		setDate(new Date());
	};

	useEffect(() => {
		// console.log("useEffect running");
		// perform core logic (what to run)
		const timerId = setInterval(() => tick(), 1000);

		// (optional) return a cleanup function
		return () => {
			// timerId is captured in a closure
			clearInterval(timerId);
		};
	}, []);

	return (
		<div>
			<h1>Hello, World! This is Clock B</h1>
			<FormattedDate date={date} />
		</div>
	);
};

export default ClockB;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	// componentDidMount() runs after the component output has been rendered to the DOM
	componentDidMount() {
		console.log("componentDidMount is running");
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
		console.log("componentWillUnmount has cleared the timer");
	}

	tick() {
		// DO NOT MANUALLY UPDATE STATE LIKE THIS
		// this.state = {...this.state, date: new Date()}
		// this.state.date = new Date() // ALSO WRONG

		// INSTEAD WE SHOULD CALL THE SETSTATE METHOD
		const newState = { date: new Date() };
		this.setState(newState);
	}

	render() {
		console.log(this.state.date.toLocaleTimeString());
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

root.render(<Clock />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Component } from "react";

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			counter: 0,
		};

		this.staticDate = new Date();

		// binding increment method to the class
		this.increment = this.increment.bind(this);
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

	increment() {
		// const newState = { counter: this.state.counter + 1 };

		// 2nd way of updating state (using anonymous callback function)
		this.setState((prevState) => ({
			counter: prevState.counter + 1,
		}));
	}

	render() {
		// console.log(this.state.date.toLocaleTimeString());
		return (
			<div>
				<h1>Hello, world!</h1>
				<FormattedDate date={this.state.date} />
				<br />
				{/* <h2>{this.state.counter}</h2>
				<button onClick={this.increment}>Increment Counter</button> */}
			</div>
		);
	}
}

export default Clock;

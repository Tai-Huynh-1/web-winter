import { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};

		this.incrementByTen = this.incrementByTen.bind(this);
		this.reset = this.reset.bind(this);
	}

	incrementByTen() {
		for (let i = 0; i < 10; i++) {
			// this.setState({
			// 	counter: this.state.counter + 1,
			// });
			console.log("stale counter", this.state.counter);

			this.setState((prevState) => {
				console.log("refreshed counter", prevState.counter);
				return { counter: prevState.counter + 1 };
			});

			console.log("i", i);
		}
	}

	reset() {
		this.setState({
			counter: 0,
		});
	}

	render() {
		console.log("rerender");
		return (
			<div>
				<h1>Counter: {this.state.counter}</h1>
				<button onClick={this.incrementByTen}>Increment by 10</button>
				<br />
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

export default Counter;

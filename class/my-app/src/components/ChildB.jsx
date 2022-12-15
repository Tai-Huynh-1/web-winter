import { Component } from "react";

class ChildB extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Child B Counter: ${this.props.counter}</h1>
			</div>
		);
	}
}

export default ChildB;

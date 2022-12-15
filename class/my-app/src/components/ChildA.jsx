import { Component } from "react";
import ChildB from "./ChildB";

class ChildA extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Child A Counter: ${this.props.counter}</h1>
			</div>
		);
	}
}

export default ChildA;

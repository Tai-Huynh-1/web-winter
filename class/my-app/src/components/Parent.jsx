import { Component } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

/**
 * A parent container component that maintains the counter state to be passed down into ChildA and ChildB component. The counter state is lifted to Parent to be centralized and synchronized. This demonstrates "state lifting". This can cause issue (prop drilling) if it has too many intermediate components in between the component that maintains the state and the descendent component that uses the state.
 */
class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	render() {
		return (
			<div>
				<h1>Parent</h1>

				<ChildA counter={this.state.counter} />

				<br />

				<ChildB counter={this.state.counter} />
			</div>
		);
	}
}

export default Parent;

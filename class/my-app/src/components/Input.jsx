import { Component, Fragment } from "react";

// function Input() {
// 	return <input />;
// }

/**
 * A controlled Input component. (Controlled component)
 * The value of input is tied to react's state. onChange will update that state.
 */
class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	/**
	 * This method updates the "text" state when an event is emitted.
	 * @param {*} event
	 */
	handleChange(event) {
		this.setState({
			text: event.target.value,
		});
	}

	render() {
		return (
			<Fragment>
				<h1>Text: {this.state.text}</h1>
				<input type="text" value={this.state.text} onChange={this.handleChange} />
			</Fragment>
		);
	}
}

export default Input;

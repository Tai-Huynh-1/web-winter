import { Component } from "react";

function CustomInput(props) {
	const { id, label, placeholder, type, state, handleChange } = props;
	const max = id === "age" ? 120 : 0;
	return (
		<>
			<label htmlFor={id}>
				{label}: <input id={id} placeholder={placeholder} type={type ? type : "text"} max={max} value={state[id]} onChange={handleChange} />
			</label>
			<br />
		</>
	);
}

class MultiFieldForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			age: 0,
			color: "",
		};

		this.fields = [
			{
				id: "username",
				label: "Username",
				placeholder: "Your display name",
				type: "text",
			},
			{
				id: "age",
				label: "Age",
				placeholder: "What is your age?",
				type: "number",
			},
			{
				id: "color",
				label: "Color",
				placeholder: "Your favorite color?",
				type: "text",
			},
		];

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleChange(event) {
		const { id, value } = event.target;

		this.setState({
			[id]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		// perform field validations

		const body = {
			username: this.state.username,
			age: this.state.age,
			color: this.state.color,
		};

		// submit to backend
		console.log("submitted body", body);
	}

	handleReset(event) {
		this.setState({
			username: "",
			age: "",
			color: "",
		});
	}

	render() {
		console.log(this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Registration Form</h1>

				{this.fields.map(({ id, label, placeholder, type }) => (
					<CustomInput key={id} id={id} label={label} placeholder={placeholder} type={type} state={this.state} handleChange={this.handleChange} />
				))}

				<button type="submit">Submit</button>
				<br />
				<button type="reset" onClick={this.handleReset}>
					Reset
				</button>
			</form>
		);
	}
}

export default MultiFieldForm;

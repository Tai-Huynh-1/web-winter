import React, { useState } from "react";

const ControlledFunc = () => {
	/**
	 * useState hook returns an array with 2 items [state, stateSetterFunction]. We destructured those 2 values to access them directly in the functional component.
	 */
	const [form, setForm] = useState({
		username: "",
		email: "",
	});

	function handleChange(event) {
		const { value, name } = event.target;

		// use callback function to return new state object to get most up-to-date form state
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	}

	return (
		<>
			<h1>Text: {JSON.stringify(form)}</h1>
			<input type="text" id="username" name="username" value={form.username} onChange={handleChange} />
			<br />
			<input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
		</>
	);
};

export default ControlledFunc;

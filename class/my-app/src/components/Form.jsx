function Form() {
	function handleSubmit(event) {
		event.preventDefault();
		console.log("event obj", event);
		console.log("You submitted the form");
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>Form</h1>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;

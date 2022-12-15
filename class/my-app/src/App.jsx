import "./App.css";
import Clock from "./components/Clock";
import ControlledFunc from "./components/ControlledFunc";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Left from "./components/Left";
import MovieList from "./components/MovieList";
import MultiFieldForm from "./components/MultiFieldForm";
import NameTag from "./components/NameTag";
import Parent from "./components/Parent";
import Right from "./components/Right";
import SplitPane from "./components/SplitPane";
import Toggle from "./components/Toggle";

function App() {
	const element4 = <NameTag name="Bob" age={15} />;

	// console.log(
	// 	<div>
	// 		<h1>H1</h1>
	// 		<h2>H2</h2>
	// 	</div>
	// );

	return (
		<div className="App">
			<Layout>
				<SplitPane left={<Left />} right={<Right />} />
				<Clock />

				<br />
				<ControlledFunc />

				{/* <Parent /> */}

				{/* <MultiFieldForm /> */}

				{/* <Form />

				<br />

				<Toggle />

				<br />

				<Counter />

				<br />

				<Greeting />

				<br />
				<Input />

				<br />

				<MovieList /> */}
			</Layout>
		</div>
	);
}

export default App;

// const prototype = {
// 	forEach: function () {
// 		console.log("my custom forEach method");
// 	},
// };

// const array = {
// 	prototype: prototype,
// };

// array.prototype.forEach();

// const element = {
// 	type: "div",
// 	children: {
// 		type: "div",
// 		children: {
// 			type: "p",
// 			children: "my paragraph content",
// 		},
// 	},
// };

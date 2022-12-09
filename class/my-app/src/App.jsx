import "./App.css";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Left from "./components/Left";
import NameTag from "./components/NameTag";
import Right from "./components/Right";
import SplitPane from "./components/SplitPane";
import Toggle from "./components/Toggle";

function App() {
	const element4 = <NameTag name="Bob" age={15} />;

	return (
		<div className="App">
			<Layout>
				<SplitPane left={<Left />} right={<Right />} />
				<Clock />

				<Form />

				<br />

				<Toggle />
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

import Navbar from "./Navbar";

const Layout = ({ children }) => {
	console.log(
		<div>
			<h1>DOM NODE</h1>
			<h2>My H2</h2>
		</div>
	);

	return (
		<div>
			{/* Navbar */}
			<Navbar />

			{/* Split Pane component => will pass in left & right side component into split pane */}
			{children}
		</div>
	);
};

export default Layout;

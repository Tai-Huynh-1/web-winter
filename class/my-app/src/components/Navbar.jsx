import React from "react";

const Navbar = () => {
	return (
		<nav className="top-nav">
			<div>
				<img src={""} alt="logo" />
			</div>

			<ul>
				<li>
					<a>Link 1</a>
				</li>
				<li>
					<a>Link 2</a>
				</li>
				<li>
					<a>Link 3</a>
				</li>
				<li>
					<a>Link 4</a>
				</li>
			</ul>

			<ul>
				<li>
					<a>Log In</a>
				</li>
				<li>
					<a>Log Out</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

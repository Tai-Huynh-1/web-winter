import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="top-nav">
			<div>
				<img src={""} alt="logo" />
			</div>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/admin">Admin</Link>
				</li>
				<li>
					<Link to="/super-admin">Super Admin</Link>
				</li>
			</ul>

			<ul>
				<li>
					<Link to="/login">Log In</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
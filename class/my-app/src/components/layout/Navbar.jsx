import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-4 px-2 bg-white border-b-2 border-indigo-500">
			<div>
				<img src={logo} alt="logo" />
			</div>

			<ul className="flex gap-5">
				<li className="bg-white hover:bg-indigo-300 hover:rounded-md">
					<Link to="/">Home</Link>
				</li>
				<li className="bg-white hover:bg-indigo-300 hover:rounded-md">
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li className="bg-white hover:bg-indigo-300 hover:rounded-md">
					<Link to="/admin">Admin</Link>
				</li>
				<li className="bg-white hover:bg-indigo-300 hover:rounded-md">
					<Link to="/super-admin">Super Admin</Link>
				</li>
			</ul>

			<ul className="flex gap-3">
				<li>
					<Link className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" to="/login">
						Log In
					</Link>
				</li>
				<li>
					<Link className="rounded-md border-2 border-indigo-500 py-2 px-3" to="/register">
						Register
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

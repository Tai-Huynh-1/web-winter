import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import logo from "../../assets/logos/logo.svg";

const PrivateNavbar = () => {
	const { logout } = useAuth();

	return (
		<nav className="flex justify-between items-center py-4 px-2 bg-white border-b-2 border-indigo-500">
			<div>
				<img src={logo} alt="logo" />
			</div>

			<ul className="flex gap-5">
				<li className="bg-white hover:bg-indigo-300 hover:rounded-md">
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
				<li>
					<Link to="/comments">Comments</Link>
				</li>
			</ul>

			<div className="flex gap-3">
				<button className="rounded-md bg-indigo-500 text-white py-2 px-3" onClick={logout}>
					Log Out
				</button>
			</div>
		</nav>
	);
};

export default PrivateNavbar;

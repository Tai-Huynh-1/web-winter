import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateNavbar = () => {
	const { logout } = useAuth();

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
				<li>
					<Link to="/comments">Comments</Link>
				</li>
			</ul>

			<ul>
				<li>
					<button onClick={logout}>Log Out</button>
				</li>
			</ul>
		</nav>
	);
};

export default PrivateNavbar;

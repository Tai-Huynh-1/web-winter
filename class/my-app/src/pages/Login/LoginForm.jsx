import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const EMAIL_REGEX = "";

const LoginForm = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";

	const handleLogin = () => login(from);
	const goBack = () => navigate(-1);

	return (
		<form onSubmit={handleLogin} className="flex flex-col gap-5 w-7/12 md:w-4/12 lg:w-3/12 mx-auto">
			<label htmlFor="email">
				Email <input id="email" type="email" placeholder="user@domain.com" required onChange={() => {}} />
			</label>

			<label htmlFor="password">
				Password <input id="password" type="password" required onChange={() => {}} />
			</label>

			<button type="submit" className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3">
				Log in
			</button>

			<button className="rounded-md border-2 border-indigo-500 py-2 px-3" onClick={goBack}>
				Go Back
			</button>
		</form>
	);
};

export default LoginForm;

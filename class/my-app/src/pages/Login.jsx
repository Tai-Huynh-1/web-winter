import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";

	const handleLogin = () => login(from);
	const goBack = () => navigate(-1);

	return (
		<div>
			<h1>Login</h1>
			<button onClick={handleLogin}>Log in</button>

			<br />
			<button onClick={goBack}>Go Back</button>
		</div>
	);
};

export default Login;

// Authentication
// 1. User prove who they are => provide email & p/w
// 2. Server-side: check provided email & p/w against the email & p/w stored in our DB
// 3. Server has to issue 2 tokens, access token (user info & issued date & exp date), refresh token
// 4. Access token is stored in the application state/context (cannot be persistent on client side)
// 5. Refresh token is stored in the cookie (HTTP only cookie) & it will persist on every refresh
// 6. Use refresh token to issue new access tokens

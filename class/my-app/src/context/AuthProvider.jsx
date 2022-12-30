import { useState, useCallback, createContext } from "react";
import { useNavigate } from "react-router-dom";
import useFakeLogin from "../hook/useFakeLogin";

// const defaultUser = {
// 	id: 0,
// 	name: "",
// 	accessToken: "",
// 	roleId: "",
// };

// const defaultAuthContext = {
// 	user: defaultUser,
// 	userIsAllowed: false,
// };

/**
 * AuthContext is almost the same as the Redux store
 */
export const AuthContext = createContext(null);

/**
 * An abstraction wrapper component that stores the user.
 * @param {*} children The children component that AuthProvider wraps around.
 * @returns The AuthContext.Provider and the children
 */
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const fakeLogin = useFakeLogin();

	const login = useCallback(
		async (from) => {
			try {
				const user = await fakeLogin();
				setUser(user);
				// refreshToken is stored in localStorage here, but should be set in an secure/http only cookie
				localStorage.setItem("refreshToken", `refresh: ${Math.floor(Math.random() * 100)}`);
				console.log("set user on first log in");
				navigate(from, { replace: true });
			} catch (err) {
				console.log(err);
			}
		},
		[fakeLogin, navigate]
	);

	const logout = useCallback(() => {
		localStorage.removeItem("refreshToken");
		setUser(null);
		navigate("/");
	}, [navigate]);

	console.log("user", user);

	const value = { user, setUser, login, logout };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

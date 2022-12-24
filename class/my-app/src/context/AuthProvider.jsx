import { useState } from "react";
import { createContext } from "react";
import useFakeLogin from "../hook/useFakeLogin";

const defaultUser = {
	id: 0,
	name: "",
	accessToken: "",
	roleId: "",
};

const defaultAuthContext = {
	user: defaultUser,
	userIsAllowed: false,
};

/**
 * AuthContext is almost the same as the Redux store
 */
export const AuthContext = createContext(defaultAuthContext);

/**
 * An abstraction wrapper component that stores the user.
 * @param {*} children The children component that AuthProvider wraps around.
 * @returns The AuthContext.Provider and the children
 */
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(defaultUser);
	const fakeLogin = useFakeLogin();

	const value = { user, setUser };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

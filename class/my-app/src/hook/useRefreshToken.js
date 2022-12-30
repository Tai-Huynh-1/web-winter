import { useCallback } from "react";
import useAuth from "./useAuth";

const useRefreshToken = () => {
	const { setUser } = useAuth();

	const refresh = useCallback(async () => {
		const response = await new Promise((resolve, reject) => {
			console.log("refreshing");
			// setTimeout creates a delay to simulate network latency from a real server
			setTimeout(() => {
				const user = {
					id: 1,
					name: "Anna",
					accessToken: `${Math.floor(Math.random() * 100)}`,
				};

				resolve(user);
			}, 2000);
		});

		setUser((prevUser) => ({ ...prevUser, ...response }));

		return response.accessToken;
	}, []);

	return refresh;
};

export default useRefreshToken;

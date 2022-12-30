import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useRefreshToken from "../../hook/useRefreshToken";

const PersistWrapper = () => {
	const refresh = useRefreshToken();
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useAuth();
	console.log("user in persist wrapper", user);

	useEffect(() => {
		let isMounted = true;
		const refreshToken = localStorage.getItem("refreshToken");
		console.log("accessToken", user?.accessToken);
		console.log("refreshToken", refreshToken);

		const refreshOrRefetchUserInfo = async () => {
			try {
				// if resfresh successfully, we have a user object (meaning they are logged in with valid access token)
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!user?.accessToken && refreshToken ? refreshOrRefetchUserInfo() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []);

	return isLoading ? <p>Loading...</p> : <Outlet />;
};

export default PersistWrapper;

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useRefreshToken from "../../hook/useRefreshToken";

const PersistWrapper = () => {
	const refresh = useRefreshToken();
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useAuth();

	useEffect(() => {
		let isMounted = true;

		const refreshOrRefetchUserInfo = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!user?.accessToken ? refreshOrRefetchUserInfo() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []);

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistWrapper;

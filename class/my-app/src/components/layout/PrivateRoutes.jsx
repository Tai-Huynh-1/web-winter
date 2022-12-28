import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Layout from "./Layout";

const PrivateRoutes = () => {
	const { user } = useAuth();
	const location = useLocation();

	return user?.id > 0 ? (
		<Layout>
			<Outlet />
		</Layout>
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default PrivateRoutes;

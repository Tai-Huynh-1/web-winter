import React from "react";
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "./Layout";

const PrivateRoutes = () => {
	const [isAllowed, setIsAllowed] = useState(false);
	const location = useLocation();

	return isAllowed ? (
		<Layout>
			<Outlet />
		</Layout>
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default PrivateRoutes;

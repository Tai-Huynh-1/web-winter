import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/layout/PageContainer";

const Dashboard = () => {
	const links = [
		{
			id: 1,
			name: "Todos",
			href: "/todos",
		},
		{
			id: 2,
			name: "Comments",
			href: "/comments",
		},
	];

	return (
		<PageContainer pageTitle={"Dashboard"}>
			<ul>
				{links.map(({ id, name, href }) => (
					<li key={id}>
						<Link to={href}>{name}</Link>
					</li>
				))}
			</ul>
		</PageContainer>
	);
};

export default Dashboard;

import React from "react";

const PageContainer = ({ pageTitle, children }) => {
	return (
		<div>
			<h1 className="text-center text-xl font-bold my-6">{pageTitle}</h1>
			{children}
		</div>
	);
};

export default PageContainer;

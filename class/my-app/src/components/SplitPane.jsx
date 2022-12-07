import React from "react";

const SplitPane = ({ left, right }) => {
	return (
		<div className="split-pane">
			{left}
			{right}
		</div>
	);
};

export default SplitPane;

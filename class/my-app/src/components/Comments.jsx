import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Comments = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);

	// cover arrow functions curly vs parenthesis
	useEffect(() => {
		console.log("fetching data");
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((response) => {
				console.log("response", response);
				return response.json();
			})
			.then((result) => {
				setData(result.slice(0, 10));
			})
			.catch((err) => {
				console.log("err", err);
				setErr(true);
			});

		console.log("after fetch");
	}, []);

	if (err) {
		return (
			<div>
				<h1>Comments</h1>
				<p>An unexpected error occured!</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Comments</h1>
			<ul style={{ border: "1px solid black" }}>
				{data.map((comment) => (
					<div key={comment.id}>
						<h2>{comment.name}</h2>
						<p>{comment.body}</p>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Comments;

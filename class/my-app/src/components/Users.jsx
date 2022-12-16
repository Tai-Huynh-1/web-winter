import React from "react";
import { useState } from "react";

/**
 * Component implements a similar functionality to a search textbox and will only perform data fetching on button click event.
 * @returns Users component or an error message.
 */
const Users = () => {
	const [userId, setUserId] = useState(0);
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	const handleChange = (e) => {
		setUserId(e.target.value);
	};

	const handleClick = (e) => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((result) => setUser(result))
			.catch((err) => {
				console.log("err", err);
				setErr(true);
			});
	};

	if (err) {
		return (
			<div>
				<h1>An unexpected error occurred.</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Users List</h1>
			<label htmlFor="userId">
				Enter the user Id you want to fetch: <input id="userId" name="userId" type="number" value={userId} onChange={handleChange} />
			</label>
			<br />
			<button type="button" onClick={handleClick}>
				Fetch User
			</button>

			{user?.id && <div>{JSON.stringify(user)}</div>}
		</div>
	);
};

export default Users;

import { useState, useEffect } from "react";

const Users = () => {
	const [userId, setUserId] = useState(0);
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	const handleChange = (e) => {
		setUserId(e.target.value);
	};

	useEffect(() => {}, []);

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

			{user?.id && <div>{JSON.stringify(user)}</div>}
		</div>
	);
};

export default Users;

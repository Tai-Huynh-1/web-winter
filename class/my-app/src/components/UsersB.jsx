import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const UsersB = () => {
	const [userId, setUserId] = useState(0);
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	const handleChange = (e) => {
		setUserId(e.target.value);
	};

	// const fetchData = useCallback(async () => {
	// 	if (userId === 0) return;

	// 	const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
	// 	return result;
	// }, []);

	useEffect(() => {
		// declare your data fetching
		function fetchData(userId) {
			if (userId === 0) return;

			axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then((response) => setUser(response.data))
				.catch((err) => setErr(true));
		}

		fetchData(userId);
	}, [userId]);

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

export default UsersB;

import React from "react";

/**
 * A component that fetches a list of user from "https://jsonplaceholder.typicode.com/users" then stores it inside redux.
 * @returns A list of users.
 */
const UsersC = () => {
	return (
		<div>
			<h1>Users List With Redux</h1>
			<label>
				Remove User with Id: <input type="number" />
			</label>
			<button>Remove</button>
			{/* Render out that list of users */}
		</div>
	);
};

export default UsersC;

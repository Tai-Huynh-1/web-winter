import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser, setUsers } from "../redux/usersC/userCActions";

/**
 * A component that fetches a list of user from "https://jsonplaceholder.typicode.com/users" then stores it inside redux.
 * @returns A list of users.
 */
const UsersC = () => {
	const [userId, setUserId] = useState(0);
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.usersC);

	const handleChange = (e) => setUserId(e.target.value);

	const handleRemove = () => dispatch(removeUser(userId));

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users`;
		axios.get(url)
			.then((result) => {
				dispatch(setUsers(result.data));
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	return (
		<div>
			<h1>Users List With Redux</h1>
			<label htmlFor="userId">
				Remove User with Id: <input id="userId" type="number" value={userId} onChange={handleChange} />
			</label>
			<button onClick={handleRemove}>Remove</button>
			{/* Render out that list of users */}
			{userList.map(({ id, name }) => (
				<div key={id}>
					<h2>{name}</h2>
					<h3>{id}</h3>
				</div>
			))}
		</div>
	);
};

export default UsersC;

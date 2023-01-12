import { useEffect } from "react";
import PageContainer from "../../../components/layout/PageContainer";
import axios from "axios";
import { useState } from "react";

// const u = {
//     email: "",
//     id: null,
//     name: "",
//     phone: "",
//     username: "",
//     website: "",
// }

const Card = (props) => {
	return (
		<div className="bg-slate-500 text-white">
			<div>
				<div>A</div>
				<div>
					<p>Name</p>
					<p>Username</p>
				</div>
			</div>

			<div>
				<p>Phone</p>
				<p>Email</p>
				<p>Website</p>
			</div>
		</div>
	);
};

const Users = () => {
	const [users, setUsers] = useState([]);
	const [selected, setSelected] = useState("");
	const [selectedUser, setSelectedUser] = useState(null);

	console.log(users);
	useEffect(() => {
		let isMounted = true;

		axios.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => isMounted && setUsers(res.data))
			.catch((err) => console.log(err));

		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		const found = users.find((u) => u.name === selected);

		if (found) {
			setSelectedUser(found);
		} else {
			setSelectedUser(null);
		}
	}, [selected, users]);

	return (
		<PageContainer pageTitle="Users">
			<div className="flex flex-col items-center gap-4">
				<select className="border-2 border-black rounded-md py-2 px-2" onChange={(e) => setSelected(e.target.value)} value={selected}>
					<option value="" disabled>
						Please Select A User
					</option>
					{users.map(({ id, name }) => (
						<option key={id} value={name}>
							{name}
						</option>
					))}
				</select>
				<div>{selectedUser ? <Card /> : <p>Please Select A User</p>}</div>
			</div>
		</PageContainer>
	);
};

export default Users;

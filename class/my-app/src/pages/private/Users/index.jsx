import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import PageContainer from "../../../components/layout/PageContainer";

// const u = {
//     email: "",
//     id: null,
//     name: "",
//     phone: "",
//     username: "",
//     website: "",
// }

const Card = ({ user }) => {
	const { name, username, email, phone, website } = user;
	const initials = useMemo(
		() =>
			name
				.split(" ")
				.map((name) => name[0])
				.join(""),
		[name]
	);
	return (
		<div className="bg-slate-700 text-white flex flex-col p-6 gap-4 w-11/12 mx-auto rounded-md">
			<div className="flex gap-4">
				<span className={`bg-white text-indigo-500 ${initials.length < 3 ? "text-3xl" : "text-2xl"} font-semibold rounded-full w-14 h-14 flex justify-center items-center`}>{initials}</span>
				<div className="">
					<p>{name}</p>
					<p className="text-stone-300">Username: {username}</p>
				</div>
			</div>

			<div>
				<p>Phone: {phone}</p>
				<p>Email: {email}</p>
				<p>Website: {website}</p>
			</div>
		</div>
	);
};

const Users = () => {
	const [users, setUsers] = useState([]);
	const [selected, setSelected] = useState("");
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		let isMounted = true;

		axios.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => isMounted && setUsers(res.data))
			.catch((err) => console.log(err));

		return () => {
			isMounted = false;
		};
	}, []);

	const handleSelect = (e) => {
		setSelected(e.target.value);

		const found = users.find((u) => u.name === e.target.value);
		if (found) {
			setSelectedUser(found);
		} else {
			setSelectedUser(null);
		}
	};

	console.log(users);
	console.log("selected", selected);
	console.log("selected User", selectedUser);

	return (
		<PageContainer pageTitle="Users">
			<div className="flex flex-col gap-8 w-8/12 mx-auto">
				<select className="border-2 border-black rounded-md py-2 px-2" onChange={handleSelect} value={selected}>
					<option value="" disabled hidden>
						Please Select A User
					</option>
					{users.map(({ id, name }) => (
						<option key={id} value={name}>
							{name}
						</option>
					))}
				</select>
				<div>{selectedUser && <Card user={selectedUser} />}</div>
			</div>
		</PageContainer>
	);
};

export default Users;

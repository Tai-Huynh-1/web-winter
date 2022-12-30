import { useCallback } from "react";
// import axios from "axios";

const useFakeLogin = () => {
	const fakeLogin = useCallback(() => {
		// const url = `https://jsonplaceholder.typicode.com/users/1`;
		// const response = await axios.get(url);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const user = {
					id: 1,
					name: "Anna",
					accessToken: `${Math.floor(Math.random() * 100)}`,
				};
				resolve(user);
			}, 1000);
		});
	}, []);

	return fakeLogin;
};

export default useFakeLogin;

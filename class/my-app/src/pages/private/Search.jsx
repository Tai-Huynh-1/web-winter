import { useState, useEffect } from "react";
import PageContainer from "../../components/layout/PageContainer";
import useDebounce from "../../hook/useDebounce";
import axios from "axios";
import { accessToken } from "../../config";

const Search = () => {
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [error, setError] = useState(null);
	const debouncedValue = useDebounce(search, 300);

	useEffect(() => {
		let isMount = true;

		const queryMapBox = async (queryString) => {
			try {
				const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryString}.json`;
				const response = await axios({
					method: "get",
					url: endpoint,
					params: {
						access_token: accessToken,
						fuzzMatch: true,
						language: "en",
						country: "us",
						types: ["place"],
					},
				});
				console.log("response", response);

				isMount && setSuggestions(response?.data?.features);
			} catch (error) {
				setError(error);
			}
		};
		// MAKE API CALL
		if (debouncedValue) {
			queryMapBox(debouncedValue);
		}

		return () => {
			isMount = false;
		};
	}, [debouncedValue]);

	console.log("suggestions", suggestions);

	return (
		<PageContainer pageTitle="Search">
			<div>
				<input className="border-black border-2 p-2 px-4 rounded-md" placeholder="Search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
				{suggestions.map((s) => (
					<div>{s.place_name}</div>
				))}
			</div>
		</PageContainer>
	);
};

export default Search;

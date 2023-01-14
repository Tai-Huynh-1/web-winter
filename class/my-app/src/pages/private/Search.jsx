import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PageContainer from "../../components/layout/PageContainer";
import useDebounce from "../../hook/useDebounce";

const Search = () => {
	const [search, setSearch] = useState("");
	const debouncedValue = useDebounce(search, 300);

	useEffect(() => {
		// MAKE API CALL
		console.log(`MAKING API CALL- debounced value changed: ${debouncedValue}`);
	}, [debouncedValue]);

	return (
		<PageContainer pageTitle="Search">
			<div>
				<input className="border-black border-2 p-2 px-4 rounded-md" placeholder="Search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
			</div>
		</PageContainer>
	);
};

export default Search;

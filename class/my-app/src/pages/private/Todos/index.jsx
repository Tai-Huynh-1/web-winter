import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import PageContainer from "../../../components/layout/PageContainer";

const t = {
	id: "asdqwe",
	title: "Grocery",
	date: new Date(),
	owner: "Jack",
	description: "Buy milk",
};

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		let isMounted = true;

		const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : null;

		isMounted && Array.isArray(todos) && setTodos(todos);

		return () => {
			isMounted = false;
		};
	}, []);

	const todoFilter = useMemo(() => todos.filter((todo) => todo.title.includes(filter) || todo.description.includes(filter)), [filter, todos]);

	console.log(todoFilter);

	// const todoFilter = useMemo(
	// 	() =>
	// 		todos.filter((todo) => {
	// 			const titleContains = todo.title.includes(filter);
	// 			const descriptionContains = todo.description.includes(filter);
	// 			return titleContains || descriptionContains;
	// 		}),
	// 	[filter]
	// );

	// continue with building card & link & new todo & individual todo page

	return (
		<PageContainer pageTitle={"Todos"}>
			<div>
				<div className="flex justify-center items-center">
					<label htmlFor="filter">Search: </label>
					<input id="filter" className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" placeholder="filter todos" onChange={(e) => setFilter(e.target.value)} value={filter} />
				</div>
				<ul>
					{todoFilter.map((todo) => (
						<div key={todo.id}>
							<h2>{todo.title}</h2>
							<h3>{todo.description}</h3>
						</div>
					))}
				</ul>
			</div>
		</PageContainer>
	);
};

export default Todos;

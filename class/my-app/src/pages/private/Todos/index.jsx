import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../../components/layout/PageContainer";

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

	const todoFilter = todos.filter((todo) => todo.title.toLowerCase().includes(filter.toLowerCase()) || todo.description.toLowerCase().includes(filter.toLowerCase()));

	// const todoFilter = useMemo(() => todos.filter((todo) => todo.title.includes(filter) || todo.description.includes(filter)), [filter, todos]);

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

	const handleDelete = (idToDelete) => {
		const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : null;

		if (!todos) return;

		const newTodos = todos.filter((todo) => todo.id !== idToDelete);
		localStorage.setItem("todos", JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	return (
		<PageContainer pageTitle={"Todos"}>
			<div>
				<div className="flex justify-center items-center">
					<label htmlFor="filter">Search: </label>
					<input id="filter" className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" placeholder="filter todos" onChange={(e) => setFilter(e.target.value)} value={filter} />
				</div>
				<div>
					<Link to="/todos/new" className="rounded-md bg-indigo-500 text-white py-2 px-3">
						Create New Todo
					</Link>
				</div>

				<ul className="mt-6 flex flex-col gap-2">
					{todoFilter.map(({ id, title, description }) => (
						<div className="border-gray-300 border-2 rounded-md p-4" key={id}>
							<Link to={`/todos/${id}`}>
								<h2 className="text-center font-bold text-xl">Title: {title}</h2>
								<h3>Description: {description}</h3>
							</Link>
							<button className="rounded-md bg-red-500 text-white py-2 px-3" onClick={() => handleDelete(id)}>
								Delete
							</button>
						</div>
					))}
				</ul>
			</div>
		</PageContainer>
	);
};

export default Todos;

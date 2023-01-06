import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/layout/PageContainer";
import useAuth from "../../../hook/useAuth";

const NewTodo = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		// input validation
		if (title.length < 3 || desc.length < 3) return;

		const todo = {
			id: crypto.randomUUID(),
			title: title.trim(),
			date: new Date(),
			owner: user?.name,
			description: desc.trim(),
		};

		const currTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

		currTodos.push(todo);

		localStorage.setItem("todos", JSON.stringify(currTodos));
		navigate("/todos");
	};

	const handleReset = (e) => {
		e.preventDefault();
		setTitle("");
		setDesc("");
	};

	const goBack = () => navigate(-1);

	return (
		<PageContainer pageTitle={"Add A New Todo"}>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit} onReset={handleReset}>
				<div>
					<label htmlFor="title">Title: </label>
					<input id="title" onChange={(e) => setTitle(e.target.value)} value={title} className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" />
				</div>
				<div>
					<label htmlFor="desc">Description: </label>
					<input id="desc" onChange={(e) => setDesc(e.target.value)} value={desc} className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" />
				</div>

				<div className="flex gap-3">
					<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="submit">
						Submit
					</button>
					<button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="reset">
						Reset
					</button>
					<button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={goBack}>
						Back
					</button>
				</div>
			</form>
		</PageContainer>
	);
};

export default NewTodo;

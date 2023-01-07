import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../../../components/layout/PageContainer";

const Todo = () => {
	const { todosId } = useParams();
	const [todo, setTodo] = useState(null);
	const [errMsg, setErrMsg] = useState("");
	const [editing, setEditing] = useState(false);
	const [update, setUpdate] = useState({
		title: "",
		desc: "",
	});

	useEffect(() => {
		const currTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

		if (currTodos.length > 0) {
			const todoArray = currTodos.filter((todo) => todo.id == todosId);
			if (todoArray.length === 1) {
				setTodo(todoArray[0]);
			} else {
				setErrMsg("Cannot load the task.");
			}
		}
	}, [todosId]);

	console.log("todo", todo);

	const toggleEdit = (e) => {
		setEditing(true);
		setUpdate({ title: todo.title, desc: todo.description });
	};

	const handleEdit = (e) => {
		const { name, value } = e.target;
		setUpdate((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleCancel = (e) => {
		setEditing(false);
		setUpdate({
			title: "",
			desc: "",
		});
	};

	// work on this for hwk
	const handleSubmit = (e) => {
		// validate user input, make sure title and description meets the same requirement like creating a new todo
		// update the todo in localStorage and also update the current todo in the state
		// afterward, toggle edit back to false
	};

	return (
		<PageContainer pageTitle={editing ? "Editing Todo" : "Todo"}>
			{todo ? (
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="title">Title: </label>
							<input id="title" name="title" onChange={handleEdit} value={!editing ? todo.title : update.title} className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" disabled={!editing} />
						</div>
						<div>
							<label htmlFor="desc">Description: </label>
							<input id="desc" name="desc" onChange={handleEdit} value={!editing ? todo.description : update.desc} className="py-1 px-3 border-2 border-gray-500 rounded-md ml-2" disabled={!editing} />
						</div>
					</form>

					{editing ? (
						<div className="flex gap-3">
							<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="submit">
								Submit
							</button>
							<button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={handleCancel}>
								Cancel
							</button>
							{/* <button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={goBack}>
								Back
							</button> */}
						</div>
					) : (
						<div>
							<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="button" onClick={toggleEdit}>
								Edit
							</button>
						</div>
					)}
				</div>
			) : (
				<p className="text-red-500">{errMsg}</p>
			)}
		</PageContainer>
	);
};

export default Todo;

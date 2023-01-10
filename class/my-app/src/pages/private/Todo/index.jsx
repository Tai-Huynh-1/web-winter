import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PageContainer from "../../../components/layout/PageContainer";

const Todo = () => {
	const { todosId } = useParams();
	const navigate = useNavigate();
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
			const todoArray = currTodos.filter((todo) => todo.id === todosId);
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

	const goBack = () => navigate(-1);

	// work on this for hwk
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("running submit");
		// validate user input, make sure title and description meets the same requirement like creating a new todo
		const l1 = update.title.length > 3;
		const l2 = update.desc.length > 3;
		if (!l1 || !l2) return;

		// update the todo in localStorage and also update the current todo in the state
		const currTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

		// const newTodos = currTodos.map((todo) => {
		// 	if (todo.id === todosId) {
		// 		todo.description = update.desc;
		// 		todo.title = update.title;
		// 	}
		// 	return todo;
		// });

		// localStorage.setItem("todos", JSON.stringify(newTodos));

		// alternative
		currTodos.forEach((todo) => {
			if (todo.id === todosId) {
				todo.description = update.desc;
				todo.title = update.title;
			}
		});
		localStorage.setItem("todos", JSON.stringify(currTodos));

		// ===== API way =====
		// const body = {
		// 	...todo,
		// 	description: update.desc,
		// 	title: update.title
		// }

		// axios.put("/todos/id", body)
		// .then(res => {
		// 	if (res.status === 201) {
		// 		// update todo state
		// 	}
		// }).catch(err => {})
		// ===== API way =====

		// afterward, toggle edit back to false
		setTodo((prevTodo) => ({ ...prevTodo, description: update.desc, title: update.title }));
		setEditing(false);
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

						{editing && (
							<div className="flex gap-3">
								<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="submit">
									Submit
								</button>
								<button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={handleCancel}>
									Cancel
								</button>
							</div>
						)}
					</form>

					{!editing && (
						<div>
							<button className="rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3" type="button" onClick={toggleEdit}>
								Edit
							</button>
							<button className="rounded-md border-2 border-indigo-500 py-2 px-3" type="button" onClick={goBack}>
								Back
							</button>
						</div>
					)}
					{/* </form> */}
				</div>
			) : (
				<p className="text-red-500">{errMsg}</p>
			)}
		</PageContainer>
	);
};

export default Todo;

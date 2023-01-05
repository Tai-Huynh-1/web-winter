import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Clock from "./components/Clock";
import ClockB from "./components/ClockB";
import Memo from "./components/Memo";
import Home from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/private/Dashboard";
import Admin from "./pages/private/Admin";
import SuperAdmin from "./pages/private/SuperAdmin";
import NotFound from "./pages/NotFound";
import PublicRoutes from "./components/layout/PublicRoutes";
import PrivateRoutes from "./components/layout/PrivateRoutes";
import PersistWrapper from "./components/layout/PersistWrapper";
import Unauthorized from "./pages/Unauthorized";
import CommentsPage from "./pages/private/CommentsPage";
import Todos from "./pages/private/Todos";
import Todo from "./pages/private/Todo";
import NewTodo from "./pages/private/NewTodo";

function App() {
	return (
		<Routes>
			{/* Public Routes */}
			<Route path="/" element={<PublicRoutes />}>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="unauthorized" element={<Unauthorized />} />
			</Route>

			<Route element={<PersistWrapper />}>
				{/* Private / Protected Routes */}
				<Route element={<PrivateRoutes />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/super-admin" element={<SuperAdmin />} />
					<Route path="comments" element={<CommentsPage />} />

					<Route path="/todos" element={<Outlet />}>
						{/* /todos */}
						<Route index element={<Todos />} />
						{/* /todos/abcdef */}
						<Route path=":todosId" element={<Todo />} />
						{/* /todos/new */}
						<Route path="new" element={<NewTodo />} />
					</Route>

					{/* <Route path="/teams" element={<Outlet />}>
						<Route index element={<Teams />} />
						<Route path=":teamId" element={<Team />} />
						<Route path=":teamId/edit" element={<EditTeam />} />
						<Route path="new" element={<NewTeam />} />
					</Route> */}
				</Route>
			</Route>

			{/* Catch All / 404 Page */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;

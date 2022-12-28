import useAuth from "../../hook/useAuth";
import Navbar from "./Navbar";
import PrivateNavbar from "./PrivateNavbar";

const Layout = ({ children }) => {
	const { user } = useAuth();
	return (
		<div>
			{/* Navbar */}
			{user?.id > 0 ? <PrivateNavbar /> : <Navbar />}

			{/* Split Pane component => will pass in left & right side component into split pane */}
			{children}
		</div>
	);
};

export default Layout;

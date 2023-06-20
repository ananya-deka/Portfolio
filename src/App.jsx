import { useState } from "react";
import "./App.css";
import Content from "./components/UI/Content";
import Navbar from "./components/UI/Navbar";

function App() {
	const [currentPage, setCurrentPage] = useState("home");

	return (
		<>
			<Navbar currentPage={currentPage} />
			<Content setCurrentPage={setCurrentPage} />
		</>
	);
}

export default App;

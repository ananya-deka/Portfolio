import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import classes from "./Content.module.css";

const Content = ({ setCurrentPage }) => {
	return (
		<main className={classes.content}>
			<Home setCurrentPage={setCurrentPage} />
			<About setCurrentPage={setCurrentPage} />
			<Projects setCurrentPage={setCurrentPage} />
			<Contact setCurrentPage={setCurrentPage} />
		</main>
	);
};

export default Content;

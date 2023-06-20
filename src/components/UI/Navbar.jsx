import classes from "./Navbar.module.css";

const Navbar = ({ currentPage }) => {
	return (
		<nav className={classes.navbar}>
			<ul className={classes.options}>
				<li
					className={`${classes.option} ${
						currentPage === "home" ? classes.selected : null
					}`}
				>
					<a href="#home">Home</a>{" "}
				</li>
				<li
					className={`${classes.option} ${
						currentPage === "about" ? classes.selected : null
					}`}
				>
					<a href="#about">About</a>
				</li>
				<li
					className={`${classes.option} ${
						currentPage === "projects" ? classes.selected : null
					}`}
				>
					<a href="#projects">Projects</a>
				</li>
				<li
					className={`${classes.option} ${
						currentPage === "contact" ? classes.selected : null
					}`}
				>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

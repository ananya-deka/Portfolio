import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<header
			className={`${classes.header} ${
				props.isIntersecting ? classes.animate : null
			}`}
		>
			<h2>{props.children}</h2>
		</header>
	);
};

export default Header;

import classes from "./Socials.module.css";
import githubLogo from "../../assets/icons/code.svg";
import linkedinLogo from "../../assets/icons/linkedin.svg";

const Socials = () => {
	return (
		<div className={classes.socials}>
			<a href="https://github.com/ananya-deka">
				<img src={githubLogo} alt="Github" height={30} width={30} />
			</a>
			<a href="https://www.linkedin.com/in/ananya-deka-75a906162/">
				<img src={linkedinLogo} alt="LinkedIn" height={30} width={30} />
			</a>
		</div>
	);
};

export default Socials;

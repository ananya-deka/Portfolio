import classes from "./About.module.css";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import reactIcon from "../../assets/icons/react.svg";
import reduxIcon from "../../assets/icons/redux.svg";
import gitIcon from "../../assets/icons/git.svg";
import pythonIcon from "../../assets/icons/python.svg";
import { useState, useEffect, useRef } from "react";
import useObserveCurrentPage from "../../hooks/useObserveCurrentPage";
import Header from "../UI/Header";

const skills = [
	{
		name: "HTML",
		icon: htmlIcon,
	},
	{
		name: "CSS",
		icon: cssIcon,
	},
	{
		name: "JavaScript",
		icon: jsIcon,
	},
	{
		name: "React",
		icon: reactIcon,
	},
	{
		name: "Redux",
		icon: reduxIcon,
	},
	{
		name: "Git",
		icon: gitIcon,
	},
	{
		name: "Python",
		icon: pythonIcon,
	},
];
const About = ({ setCurrentPage }) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const pageRef = useRef(null);
	useObserveCurrentPage(pageRef, setIsIntersecting);

	useEffect(() => {
		if (isIntersecting) {
			setCurrentPage("about");
		}
	}, [isIntersecting, setCurrentPage]);

	return (
		<section ref={pageRef} className={classes.about} id="about">
			<div className={classes["about-me"]}>
				<Header isIntersecting={isIntersecting}>About Me</Header>

				<div
					className={`${classes.about__text} ${
						isIntersecting ? classes.animate : null
					}`}
				>
					<p className={classes.paragraph}>
						I did my B.Tech in Computer Science and Engineering, and
						graduated in 2021. I have a keen interest in frontend
						development, specifically React.js. There is nothing
						quite as rewarding to me as seeing something I am
						building take life in front of me.
					</p>
					<p className={classes.paragraph}>
						I am a huge literature and movie buff, possibly because
						I love stories. Telling stories is my creative outlet.
					</p>
				</div>
			</div>
			<div className={classes.skills}>
				<ul className={classes.skills__list}>
					{skills.map((skill) => (
						<li className={classes.skill} key={skill.name}>
							<img
								src={skill.icon}
								alt={skill.name}
								height={40}
								width={40}
							/>
							{skill.name}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default About;

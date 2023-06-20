import classes from "./Projects.module.css";
import screenTime from "../../assets/projects/screentime.png";
import pokedex from "../../assets/projects/pokedex.png";
import { useState, useEffect, useRef } from "react";
import useObserveCurrentPage from "../../hooks/useObserveCurrentPage";

import Header from "../UI/Header";
import Project from "../content/Project";

const projects = [
	{
		name: "ScreenTime",
		image: screenTime,
		description:
			"This web application consumes the TmDB api, and lets you browse movies and tv shows by genres, search, display details about them, and lets you make different playlists from them. ",
		technologies: [
			"React.js",
			"React Router",
			"Axios",
			"Redux",
			"Firebase",
		],
		url: "https://time-screen.netlify.app/",
		github: "https://github.com/ananya-deka/ScreenTime",
	},
	{
		name: "Pokedex",
		image: pokedex,
		description:
			"This web application consumes the PokéAPI api, and allows you to view pokemon, by searching for them or filtering them based on abilities, types, etc. The results are infinitely scrollable. Bookmarking feature is added by making use of local storage.",
		technologies: ["React.js", "React Router"],
		url: "https://pokedex-terous.netlify.app/",
		github: "https://github.com/ananya-deka/Pokedex",
	},
];

const Projects = ({ setCurrentPage }) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const pageRef = useRef(null);
	useObserveCurrentPage(pageRef, setIsIntersecting);

	useEffect(() => {
		if (isIntersecting) {
			setCurrentPage("projects");
		}
	}, [isIntersecting, setCurrentPage]);

	return (
		<section ref={pageRef} id="projects" className={classes.project_page}>
			<div className={classes.details}>
				<Header isIntersecting={isIntersecting}>Projects</Header>
				<div>Collection of a few personal projects I have made.</div>
			</div>

			<div className={classes.projects}>
				{projects.map((project) => (
					<Project
						isIntersecting={isIntersecting}
						project={project}
						key={project.name}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;

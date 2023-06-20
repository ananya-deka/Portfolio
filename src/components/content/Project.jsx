import classes from "./Project.module.css";
import codeLogo from "../../assets/icons/code.svg";
import linkLogo from "../../assets/icons/link.svg";

const Project = ({ project, isIntersecting }) => {
	return (
		<div
			className={`${classes.project} ${
				isIntersecting ? classes.animate : null
			}`}
		>
			<div className={classes.img_wrapper}>
				<img
					src={project.image}
					alt={project.name}
					className={classes.project__img}
				/>
			</div>

			<div className={classes.description}>
				<div className={classes.description__title}>{project.name}</div>
				<div className={classes.description__text}>
					{project.description}
				</div>
				<div className={classes.bottom}>
					<ul className={classes.technologies}>
						{project.technologies.map((tech, idx) => (
							<li key={idx} className={classes.tech}>
								{tech}
							</li>
						))}
					</ul>
					<div className={classes.links}>
						<a href={project.url}>
							<img
								src={linkLogo}
								alt="link"
								width={20}
								height={20}
							/>
						</a>
						<a href={project.github}>
							<img
								src={codeLogo}
								alt="code"
								width={20}
								height={20}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

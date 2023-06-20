import classes from "./Home.module.css";
import animatedMe from "../../assets/icons/me.svg";
import { useEffect, useRef, useState } from "react";
import useObserveCurrentPage from "../../hooks/useObserveCurrentPage";
import Socials from "../UI/Socials";
import startIcon from "../../assets/icons/start.svg";

const Home = ({ setCurrentPage }) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const pageRef = useRef(null);
	useObserveCurrentPage(pageRef, setIsIntersecting);

	useEffect(() => {
		if (isIntersecting) {
			setCurrentPage("home");
		}
	}, [isIntersecting, setCurrentPage]);

	return (
		<section ref={pageRef} id="home" className={classes.home}>
			<div className={classes.hero}>
				<div className={classes.introduction}>
					<header className={classes.header}>
						<div className={classes.bigtext}>
							I&apos;m{" "}
							<span className={classes.orange}>Ananya</span>{" "}
						</div>
						<div className={classes.subtext}>
							Software Engineer, Frontend Developer
						</div>
					</header>
					<div className={classes.links}>
						<Socials />
						<div className={classes.btn_wrapper}>
							<button className={classes.projects_btn}>
								<a href="#projects">Go to Projects</a>
							</button>
						</div>
					</div>
				</div>
				<div className={classes.logo_wrapper}>
					<img src={animatedMe} className={classes.logo} />
				</div>
			</div>
			<div className={classes.start}>
				<div className={classes.start__icon_wrapper}>
					<a href="#about">
						<img
							className={classes.start__icon}
							src={startIcon}
							alt="Get started"
							width={50}
							height={50}
						/>
					</a>
				</div>
				Get Started
			</div>
		</section>
	);
};

export default Home;

import classes from "./Contact.module.css";
import { useState, useEffect, useRef } from "react";
import useObserveCurrentPage from "../../hooks/useObserveCurrentPage";
import Socials from "../UI/Socials";
import Header from "../UI/Header";

const Contact = ({ setCurrentPage }) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const pageRef = useRef(null);
	useObserveCurrentPage(pageRef, setIsIntersecting);

	useEffect(() => {
		if (isIntersecting) {
			setCurrentPage("contact");
		}
	}, [isIntersecting, setCurrentPage]);

	return (
		<section ref={pageRef} id="contact" className={classes.contact}>
			<Header isIntersecting={isIntersecting}>Contact Me</Header>
			<div>
				I am currently open to job opportunities. My inbox is a very
				welcoming space.
			</div>
			<div className={classes.contact_details}>
				<div>
					Email:{" "}
					<a
						className={classes.email}
						href="mailto:ananya.deka14@gmail.com"
					>
						ananya.deka14@gmail.com
					</a>
				</div>
				<div className={classes.socials}>
					My Socials:
					<Socials />
				</div>
			</div>
		</section>
	);
};

export default Contact;

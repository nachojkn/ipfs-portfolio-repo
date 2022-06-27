import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { GrMedium } from "react-icons/gr";

const footer = () => {
	return (
		<footer>
			<a href="#" className="footer_logo">
				nachojkn.eth
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer_socials">
				<a
					href="https://www.linkedin.com/in/ignacio-jakin/?locale=en_US"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin size={20} />
				</a>
				<a href="https://github.com/nachojkn" target="_blank" rel="noreferrer">
					<BsGithub size={20} />
				</a>
				<a href="https://twitter.com/nachojkn" target="_blank" rel="noreferrer">
					<BsTwitter size={20} />
				</a>
				<a href="https://nachojkn.medium.com" target="_blank" rel="noreferrer">
					<GrMedium size={20} />
				</a>
			</div>

			<div className="footer_copyright">
				<small>&copy; nachojkn. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default footer;

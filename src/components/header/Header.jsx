import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Abstract NFT - TRANSP - comp.png";
import HeaderSocials from "./HeaderSocials";

export const header = () => {
	return (
		<header>
			<div className="container header_container">
				<h5>Hello I'm</h5>
				<h1>Ignacio Jakin</h1>
				<h5 className="text-light">Fullstack Web Developer</h5>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src={ME} alt="my profile" />
				</div>
				<a href="#contact" className="scroll_down">
					Scroll Down!
				</a>
			</div>
		</header>
	);
};

export default header;

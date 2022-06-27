import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { GrMedium } from "react-icons/gr";

const HeaderSocials = () => {
	return (
		<div className="header_socials">
			<a
				href="https://www.linkedin.com/in/ignacio-jakin/?locale=en_US"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin size={22} />
			</a>
			<a href="https://github.com/nachojkn" target="_blank" rel="noreferrer">
				<BsGithub size={22} />
			</a>
			<a href="https://twitter.com/nachojkn" target="_blank" rel="noreferrer">
				<BsTwitter size={22} />
			</a>
			<a href="https://nachojkn.medium.com" target="_blank" rel="noreferrer">
				<GrMedium size={22} />
			</a>
		</div>
	);
};

export default HeaderSocials;

import React from "react";
import "./nav.css";
import { BiHome, BiMessageDetail } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { FaRegHandshake, FaHardHat } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}
			>
				<BiHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineFileText />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<FaHardHat />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}
			>
				<FaRegHandshake />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageDetail />
			</a>
		</nav>
	);
};

export default Nav;

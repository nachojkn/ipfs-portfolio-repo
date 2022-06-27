import React from "react";
import "./about.css";
import RealME from "../../assets/Foto site - comp.jpg";
import { BiWrench } from "react-icons/bi";
import { TbChartArrows } from "react-icons/tb";
import { VscProject } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About me</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={RealME} alt="About me" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<BiWrench className="about_icon" />
							<h5>Experience</h5>
							<small>5+ Years working in heavy industry</small>
						</article>
						<article className="about_card">
							<TbChartArrows className="about_icon" />
							<h5>Varied expertise</h5>
							<small>From manufacturing, I+D to Sales</small>
						</article>
						<article className="about_card">
							<VscProject className="about_icon" />
							<h5>Porfolio</h5>
							<small>Backend focused</small>
						</article>
					</div>
					<p>
						I describe myself as a curious individual, who seeks to understand
						everything in my reach. I started my academic and professional
						journey as an electromechanical technician (grad) and engineer
						(student) that did some programming on the side as a hobby.{" "}
					</p>{" "}
					<p>
						But ever since I learned about Ethereum I decided I wanted to be a
						part of the ecosystem and began to study Computer Science. By
						completing a couple of Fullstack courses, I realized I'm more fond
						of Backend Development (using Phyton, nodeJS and GO).
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;

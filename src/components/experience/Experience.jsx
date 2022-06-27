import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const experience = () => {
	return (
		<section id="experience">
			<h5>Which skills do I have?</h5>
			<h2>My experience</h2>

			<div className="container experience_container">
				<div className="experience_frontend">
					<h3>Frontend Development</h3>
					<div className="experience_content">
						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>

				<div className="experience_backend">
					<h3>Backend Development</h3>
					<div className="experience_content">
						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>GraphQL</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>

						<article className="experience_details">
							<BsFillCheckCircleFill className="experience_details-icon" />
							<div>
								<h4>NodeJS</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default experience;

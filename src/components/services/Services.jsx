import React from "react";
import "./services.css";
import { BsCheck2Circle } from "react-icons/bs";

const Services = () => {
	return (
		<section id="services">
			<h5>What do I bring to the table?</h5>
			<h2>Services</h2>
			<div className="container services_container">
				<article className="service">
					<div className="service_head">
						<h3>Indepence and flexibility</h3>
					</div>
					<ul className="service_list">
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Managed my own projects </p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Team player </p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Goal focused </p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Unlimited curiousity </p>
						</li>
					</ul>
				</article>
				{/*End of UI/UX*/}

				<article className="service">
					<div className="service_head">
						<h3>Web Development</h3>
					</div>
					<ul className="service_list">
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>HTML, CSS and JS for Frontend </p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Python, nodeJS and Express for Backend</p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Bootstrap and React</p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>MySQL and GraphQL </p>
						</li>
					</ul>
				</article>
				{/*End of Web development*/}

				<article className="service">
					<div className="service_head">
						<h3>Content Creation</h3>
					</div>
					<ul className="service_list">
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Creative mindset </p>
						</li>
						<li>
							<BsCheck2Circle className="service_list-icon" />
							<p>Medium blogs </p>
						</li>
					</ul>
				</article>
				{/*End of Content Creation*/}
			</div>
		</section>
	);
};

export default Services;

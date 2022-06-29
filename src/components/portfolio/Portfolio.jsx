import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio-1 - comp.png";
import IMG2 from "../../assets/Portfolio-2 - comp.png";
import IMG3 from "../../assets/Portfolio-3.png";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Fullstack Web Design | 1",
		github: "https://github.com/nachojkn/First-Web-Design",
		demo: "https://cryptonewsarg.000webhostapp.com/",
	},
	{
		id: 2,
		image: IMG2,
		title: "Fullstack Web Design | 2",
		github: "https://github.com/nachojkn/ipfs-portfolio-repo",
		demo: "nachojkn.eth.link",
	},
	{
		id: 3,
		image: IMG3,
		title: "CRUD Development | WORK IN PROGRESS",
		github: "https://github.com/nachojkn",
		demo: "",
	},
];

const portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio_container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio_item">
							<div className="portfolio_item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="porfolio_item-cta">
								<a
									href={github}
									className="btn"
									rel="noreferrer"
									target="_blank"
								>
									Github
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									rel="noreferrer"
									target="_blank"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default portfolio;

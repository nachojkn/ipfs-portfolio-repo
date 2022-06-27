import React, { useRef, useState } from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Abstract NFT - TRANSP - comp.png";
import AVTR2 from "../../assets/Abstract NFT - TRANSP - comp.png";
import AVTR3 from "../../assets/Abstract NFT - TRANSP - comp.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: AVTR1,
		name: "Some old boss",
		review: "Awesome work man, keep it up",
	},
	{
		avatar: AVTR2,
		name: "Mom",
		review: "For the last time, could you please leave the attic???",
	},
	{
		avatar: AVTR3,
		name: "Random dude",
		review: "Yes, it's an amazing website. Now please could you supersize it?!",
	},
	{
		avatar: AVTR2,
		name: "Argentinian economy",
		review:
			"You need to trust in the Argentinian Peso, is the only way to develope the country. Now if you don't mind, that triple digit inflation won't be made by itself!",
	},
	{
		avatar: AVTR3,
		name: "Old man on the street",
		review:
			"Kid, you told me to like your tweet, and I've already done it. Now where is my money?",
	},
];

const Tertimonials = () => {
	return (
		<section id="testimonials">
			<h5>Reviews from clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonials_container"
				slidesPerView={1}
				pagination={true}
				modules={[Pagination]}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client_avatar">
								<img src={avatar} alt="Client avatar" />
							</div>
							<h5 className="client_name">{name}</h5>
							<small className="client_review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Tertimonials;

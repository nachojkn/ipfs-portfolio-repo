import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { TiSocialTwitter } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_hrb7459",
			"template_qptjf2e",
			form.current,
			"-6j-uVMTSv_TY550l"
		);
		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get in touch!</h5>
			<h2>Contact Me</h2>

			<div className="container contact_container">
				<div className="contact_options">
					<article className="contact_option">
						<FiMail className="contact_option-icon" />
						<h4>Email</h4>
						<h5>nachojakin@gmail.com</h5>
						<a
							href="mailto:nachojakin@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send an Email
						</a>
					</article>

					<article className="contact_option">
						<TiSocialTwitter className="contact_option-icon" />
						<h4>Direct Message</h4>
						<h5>@nachojkn</h5>
						<a
							href="https://twitter.com/messages/compose?recipient_id=2981243843"
							target="_blank"
							rel="noreferrer"
							className="twitter-dm-button"
							data-screen-name="@nachojkn"
						>
							Send a DM
						</a>
					</article>

					<article className="contact_option">
						<BsLinkedin className="contact_option-icon" />
						<h4>LinkedIn</h4>
						<h5>Ignacio Jakin</h5>
						<a
							href="https://www.linkedin.com/in/ignacio-jakin/?locale=en_US"
							target="_blank"
							rel="noreferrer"
						>
							Let's connect!
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your name" required />
					<input type="email" name="email" placeholder="Your email" required />
					<textarea
						name="message"
						cols="1"
						rows="7"
						placeholder="Your message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send message!
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

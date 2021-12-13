import React, { useState } from 'react';
import styles from './contact.module.css';
import utilsStyles from '../styles/utils.module.css';

export default function Contact() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmitBtn = (e) => {
		e.preventDefault();
	};

	return (
		<section className={utilsStyles.bg_white} id="contact">
			<div className={styles.contact_section_container}>
				<h2>
					<span className={utilsStyles.font_accent}>C</span>ONTACT
				</h2>
				<p className={styles.thank_you}>
					Thank you for listening! Let’s connect.
				</p>
				<form className={styles.form}>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={values.name}
						onChange={handleOnChange}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={values.email}
						onChange={handleOnChange}
						required
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						value={values.message}
						onChange={handleOnChange}
						required
					/>
					<button className={utilsStyles.font_white} onClick={handleSubmitBtn}>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

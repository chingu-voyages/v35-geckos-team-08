import React, { useState } from 'react';
import styles from './contact.module.css';
import utilsStyles from '../styles/utils.module.css';
import emailjs from 'emailjs-com';
import randomId from 'random-id';

export default function Contact() {
	const [values, setValues] = useState({
		contactNumber: randomId(4, 'aA0'),
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

		emailjs
			.send(
				'contact_service',
				'contact_form',
				values,
				process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID // TODO: remove NEXT_PUBLIC_ prefix at build
			)
			.then((res) => console.log('SUCCESS!', res.status, res.text))
			.catch((err) => console.error('FAILED...', err));
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

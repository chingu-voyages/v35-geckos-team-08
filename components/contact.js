import React, { useState, useRef } from 'react';
import styles from './contact.module.css';
import utilsStyles from '../styles/utils.module.css';
import emailjs from '@emailjs/browser';
import randomId from 'random-id';
import validator from 'validator';
import { BiInfoCircle, BiCheckCircle } from 'react-icons/bi';

export default function Contact() {
	const contactSectionEle = useRef(null);
	const initialValues = {
		contactNumber: randomId(4, 'aA0'),
		name: '',
		email: '',
		message: '',
	};
	const [values, setValues] = useState(initialValues);
	const [postSendMessage, setPostSendMessage] = useState(null);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleOnBlur = () => {
		setTimeout(() => {
			contactSectionEle.current.scrollIntoView(true, { behaviour: 'smooth' });
		}, 100);
	};

	const handlePostSend = (status) => {
		if (status === 'OK') {
			setPostSendMessage(
				<p className={styles.success_message}>
					<BiCheckCircle />
					Your message has been sent!
				</p>
			);
			setValues(initialValues);
		} else {
			setPostSendMessage(
				<p className={styles.error_message}>
					<BiInfoCircle />
					Failed to send...Please try again.
				</p>
			);
			setValues(initialValues);
		}
	};

	const handleSubmitBtn = async (e) => {
		e.preventDefault();

		setPostSendMessage(<p>Sending...</p>);

		const isAllFilled = await Object.values(values).every(
			(ele) => validator.isEmpty(ele) === false
		);

		const isValidEmail = await validator.isEmail(values.email);

		if (!isAllFilled) {
			setPostSendMessage(
				<p className={styles.error_message}>
					<BiInfoCircle />
					Please fill out all items.
				</p>
			);
		} else if (!isValidEmail) {
			setPostSendMessage(
				<p className={styles.error_message}>
					<BiInfoCircle />
					Please enter a valid email.
				</p>
			);
		}

		try {
			isAllFilled &&
				isValidEmail &&
				(await emailjs
					.send(
						'contact_service',
						'contact_form',
						values,
						process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID // TODO: remove NEXT_PUBLIC_ prefix at build
					)
					.then((res) => {
						(res.status === 200) & handlePostSend('OK');
					})
					.catch((err) => {
						handlePostSend('NG');
						console.error('FAILED...', err);
					}));
		} catch (err) {
			handlePostSend('NG');
			console.error('FAILED...', err);
		}

		setTimeout(() => setPostSendMessage(null), 3000);
	};

	return (
		<section
			className={utilsStyles.bg_white}
			id="contact"
			ref={contactSectionEle}
		>
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
						onBlur={handleOnBlur}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={values.email}
						onChange={handleOnChange}
						onBlur={handleOnBlur}
						required
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						value={values.message}
						onChange={handleOnChange}
						onBlur={handleOnBlur}
						required
					/>
					<div className={styles.button_wrapper}>
						{postSendMessage}
						<button
							className={utilsStyles.font_white}
							onClick={handleSubmitBtn}
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

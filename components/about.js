import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import utilsStyles from '../styles/utils.module.css';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';

export default function About() {
	return (
		<section
			className={`${utilsStyles.bg_black} ${styles.about_section}`}
			id="about"
		>
			<div className={styles.about_section_container}>
				<h2 className={utilsStyles.font_white}>
					<span className={utilsStyles.font_accent}>A</span>BOUT
				</h2>
				<div className={styles.image_wrapper}>
					<Image
						priority
						src="/assets/sample_profile_pic.jpeg"
						height={160}
						width={160}
						layout="fill"
						objectFit="cover"
						alt="profile-dummy"
					/>
				</div>
				<h3 className={`${utilsStyles.font_white} ${styles.about_section}`}>
					General&nbsp;<span className={utilsStyles.font_accent}>S</span>trike
				</h3>
				<div className={`${utilsStyles.font_white} ${styles.description}`}>
					<p>
						Velit tincidunt ultricies dictum at. Amet, lectus gravida in enim
						proin mauris elit eu leo. Suspendisse pharetra donec erat aliquet
						consectetur lectus vitae, fermentum. Tempus, vulputate etiam in
						tristique volutpat vestibulum. Odio penatibus at vitae consectetur
						sed.
					</p>
					<p>
						Velit tincidunt ultricies dictum at. Amet, lectus gravida in enim
						proin mauris elit eu leo. Suspendisse pharetra donec erat aliquet
						consectetur lectus vitae, fermentum.
					</p>
				</div>
				<article className={styles.social_icons}>
					<Link href="/" passHref>
						<BsTwitter size="1.5rem" />
					</Link>
					<Link href="/" passHref>
						<GrFacebookOption size="1.5rem" />
					</Link>
					<Link href="/" passHref>
						<BsInstagram size="1.5rem" />
					</Link>
				</article>
			</div>
		</section>
	);
}

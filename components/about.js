import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import utilsStyles from '../styles/utils.module.css';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { shimmer, toBase64 } from '../utils/shimmer';

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
						src="/assets/background-about-profile.jpg"
						layout="fill"
						objectFit="cover"
						objectPosition="center top"
						alt="profile-dummy"
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
					/>
				</div>
				<h3 className={`${utilsStyles.font_white} ${styles.about_section}`}>
				DJ&nbsp;General&nbsp;
				<span className={utilsStyles.font_accent}>S</span>trike
				</h3>
				<div className={`${utilsStyles.font_white} ${styles.description}`}>
					<p>
					  DJ General Strike has a lifelong commitment to social justice as a community organizer, social worker, scholar, and artist. Ensuring the highest quality, DJ General Strike conducts countless hours of research, musical consumption, classification, and quality control. Each week, DJ General Strike forages the greatest weekly ensemble from eclectic sources and time periods to advance social change through protest music.
					</p>
					<p>
					  Take action by sharing this app with your friends and family and make Protest Tunes more accessible to the people. Contact DJ General Strike about radio syndication, streaming onto new platforms, live performances, and make requests for protest tracks and themes.
					</p>
				</div>
				<article className={styles.social_icons}>
					<Link href="/" passHref>
						<>
							<BsTwitter size="1.5rem" />
						</>
					</Link>
					<Link href="/" passHref>
						<>
							<GrFacebookOption size="1.5rem" />
						</>
					</Link>
					<Link href="/" passHref>
						<>
							<BsInstagram size="1.5rem" />
						</>
					</Link>
				</article>
			</div>
		</section>
	);
}

import Link from 'next/link';
import styles from './footer.module.css';
import utilsStyles from '../styles/utils.module.css';

export default function Footer() {
	return (
		<footer>
			<p className={`${utilsStyles.font_white} ${styles.text}`}>
				Copyright ©2021.{' '}
				<span className={styles.link_wrap}>
					<Link href="https://github.com/chingu-voyages/v35-geckos-team-08">
						Chingu-v-35-08.group
					</Link>
				</span>
				<br />
				All Rights Reserved.
			</p>
		</footer>
	);
}

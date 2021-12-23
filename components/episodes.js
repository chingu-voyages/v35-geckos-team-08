import React from 'react';
import styles from './episodes.module.css';
import utilsStyles from '../styles/utils.module.css';
import AudioPlayer from './AudioPlayer';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// eslint-disable-next-line react/jsx-key
const items = [<AudioPlayer />, <AudioPlayer />, <AudioPlayer />];

const Episodes = () => {
	return (
		<section
			className={`${utilsStyles.bg_white} ${styles.audio_player_section}`}
			id="episodes"
		>
			<div className={styles.episodes_section_container}>
				<h2 className={utilsStyles.font_black}>
					<span className={utilsStyles.font_accent}>E</span>pisodes
				</h2>
				<AliceCarousel
					mouseTracking
					items={items}
					controlsStrategy="alternate"
				/>
			</div>
		</section>
	);
};

export default Episodes;

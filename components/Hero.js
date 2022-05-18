import React from 'react';
import Image from 'next/image';
import styles from '../components/hero.module.css';
import utilsStyles from '../styles/utils.module.css';
import Menu from './menu';
import { useMediaQuery } from 'react-responsive';
import { Link as Scroll } from 'react-scroll';

export default function Hero() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)'
  })

  return (
		<div className={utilsStyles.bg_black} id="home">
        <Menu/>
        <div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.logo_wrap}>
						<Image
							width={92}
							height={120}
							src="/assets/SeattleDJ_fist.png"
							alt="logo"
						/>
					</div>
					{isTablet ? (
						<h1 className={`${utilsStyles.font_white} ${styles.title}`}>
							Protest <span className={utilsStyles.font_accent}>T</span>unes
						</h1>
					) : (
						<h1 className={`${utilsStyles.font_white} ${styles.title}`}>
							Protest
							<br />
							<span className={utilsStyles.font_accent}>T</span>unes
						</h1>
					)}
					{isDesktop ? (
						<p className={styles.intro}>A Weekly protest music radio show
						<br />An eclectic mix of protest songs of all genres and eras 
						<br />On <a href="https://www.kbcs.fm"><u>KBCS 91.3 FM </u></a>Tuesdays at 11 pm-1 am
						<br />Listen to our newest episodes on the <a href="https://www.kbcs.fm/programs/protest-tunes/"><u>KBCS Archive</u></a>						
						</p>
					) : (
						<p className={styles.intro}>A Weekly protest music radio show
						An eclectic mix of protest songs of all genres and eras
						On <a href="https://www.kbcs.fm"><u>KBCS 91.3 FM </u> Tuesdays at 11 pm-1 am 
						Listen to our newest two episodes on the <a href="https://www.kbcs.fm/programs/protest-tunes/">KBCS Archive</a>
						</p>
					)}
				</div>
			<Scroll 
        to="episodes"  
        spy={true}
        smooth={true}
        duration={1000}>
			  <div className={styles.arrows}>
				  <Image width={45} height={65} src="/assets/arrows.png" alt="arrow" />
			  </div>
			</Scroll>
    	</div>
	</div>
  );
}

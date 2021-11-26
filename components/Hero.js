import React from 'react';
import Image from 'next/image';
import styles from '../components/hero.module.css';
import utilsStyles from '../styles/utils.module.css';
import Menu from './menu';
import { useMediaQuery } from 'react-responsive';

export default function Hero(){

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  return (
		<div className={utilsStyles.bg_black}>
        <Menu />
        <div className={styles.logo_wrap}>
          <Image className={styles.logo} width={92} height={120} src="/assets/SeattleDJ_fist.png" alt="logo"/>
        </div>
        <div className={styles.top}>
        {isDesktop ? <h1 className={`${utilsStyles.font_white} ${styles.title}`}>Protest <span className={utilsStyles.font_accent}>T</span>unes</h1> 
        : <h1 className={`${utilsStyles.font_white} ${styles.title}`}>Protest<br/><span className={utilsStyles.font_accent}>T</span>unes</h1>}
        </div>
        {isDesktop && <h2 className={styles.intro}>Musician, Singer, Rapper. He just debuted as Music Artist to follow his dream. Now it’s not ‘dream’ anymore.</h2>}
        <div className={styles.arrows}>
          <Image width={45} height={65} src="/assets/arrows.png" alt="arrow"/>
        </div>
    </div>
  );
}
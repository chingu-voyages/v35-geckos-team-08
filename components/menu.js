import React, { useState } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';

export default function Menu(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  const hamburgerMenu = () => {
    return !isMenuOpen ? 
      (<div className={styles.hamburger} onClick={handleMenuClick}>
        <div className={styles.hamburger_line}></div>
      </div>)
      :  
      (<div className={styles.hamburger} onClick={handleMenuClick}>
        <div className={styles.cross_line}></div>
      </div>)
  }

  return(
    <React.Fragment>
    {hamburgerMenu()}
    <div className={isMenuOpen ? styles.menu : styles.menu_hidden}>
      <ul>
        <Link href="/" ><li onClick={handleMenuClick}>HOME</li></Link>
        <Link href="#episodes"><li onClick={handleMenuClick}>EPISODES</li></Link>
        <Link href="#about"><li onClick={handleMenuClick}>ABOUT</li></Link>
        <Link href="#contact"><li onClick={handleMenuClick}>CONTACT</li></Link>
      </ul>
      </div>
    <div className={isMenuOpen ? styles.overlay : styles.overlay_hidden}></div>
    </React.Fragment>
  )
}


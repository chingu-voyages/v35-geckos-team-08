import React, { useState } from 'react';
import { Link as Scroll } from 'react-scroll';
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
        <Scroll to="home" ><li onClick={handleMenuClick}>HOME</li></Scroll>
        <Scroll to="episodes"><li onClick={handleMenuClick}>EPISODES</li></Scroll>
        <Scroll to="about"><li onClick={handleMenuClick}>ABOUT</li></Scroll>
        <Scroll to="contact"><li onClick={handleMenuClick}>CONTACT</li></Scroll>
      </ul>
      </div>
    <div className={isMenuOpen ? styles.overlay : styles.overlay_hidden}></div>
    </React.Fragment>
  )
}


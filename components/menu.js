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
      <li onClick={handleMenuClick}>
        <Scroll 
        to="home"  
        spy={true}
        smooth={true}
        duration={1000}>
        HOME
        </Scroll>
        </li>
        
        <li onClick={handleMenuClick}>
        <Scroll 
        to="episodes"  
        spy={true}
        smooth={true}
        duration={1000}>
        EPISODES
        </Scroll>
        </li>

        <li onClick={handleMenuClick}>
        <Scroll 
        to="about"  
        spy={true}
        smooth={true}
        duration={1000}>
        ABOUT
        </Scroll>
        </li>

        <li onClick={handleMenuClick}>
        <Scroll 
        to="contact"  
        spy={true}
        smooth={true}
        duration={1000}>
        CONTACT
        </Scroll>
        </li>
      </ul>
      </div>
    <div className={isMenuOpen ? styles.overlay : styles.overlay_hidden}></div>
    </React.Fragment>
  )
}


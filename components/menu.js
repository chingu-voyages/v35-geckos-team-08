import React from 'react';
import styles from './menu.module.css';
export default function Menu({openMenu, OpenMenu}){

  return(
    <div>
    {openMenu ? (
      <div>
      <div className={styles.menu}>
      <div className={styles.close_btn} onClick={OpenMenu}>&times;</div>
      <ul>
        <li>HOME</li>
        <li>EPISODES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      </div>
      <div className={styles.overlay}>
      </div>
      </div>
    ) : (
      <div>
      <div className={styles.menu} style={{left: '-400px'}}>
      <div className={styles.close_btn}>&times;</div>
      <ul>
        <li>HOME</li>
        <li>EPISODES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      </div>
      </div>
    )}

    </div>
  )
}


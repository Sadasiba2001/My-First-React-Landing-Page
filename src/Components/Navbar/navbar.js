import React from 'react';
import style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.nav}>
        <div className={style.nav_logo}>EV-olution</div>
        <ul className={style.nav_menu}>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className={style.nav_contact}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;
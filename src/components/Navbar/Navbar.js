import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; // שימוש ב-CSS Modules

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">מדריך GitHub Pages</NavLink>
      </div>
      <ul className={styles.navList}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : undefined}>מבוא</NavLink></li>
        <li><NavLink to="/setup" className={({ isActive }) => isActive ? styles.activeLink : undefined}>הגדרה</NavLink></li>
        <li><NavLink to="/deployment" className={({ isActive }) => isActive ? styles.activeLink : undefined}>פריסה</NavLink></li>
        <li><NavLink to="/embedding" className={({ isActive }) => isActive ? styles.activeLink : undefined}>הטמעה</NavLink></li>
        <li><NavLink to="/use-cases" className={({ isActive }) => isActive ? styles.activeLink : undefined}>מקרי שימוש</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar; 
"use client"

import { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS module
import Link from "next/link";
const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.logo}>3DS</div>
            <ul className={styles.navLinks}>
                <li className='home'><a href="/home">Home</a></li>
                <li className='aboutus'><a href="/aboutus">About</a></li>
                <li className='contact'><a href="#">Contact</a></li>
            </ul>
            <button onClick={toggleTheme} className={styles.themeToggle}>
                {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
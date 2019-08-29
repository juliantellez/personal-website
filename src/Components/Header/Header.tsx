import * as React from 'react';

import * as styles from './header.css'
import Social from '../Social';


const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.navElement} href="/">
                    Julian Tellez
                </a>
                <Social />
            </nav>
        </header>
    )
}

export default Header
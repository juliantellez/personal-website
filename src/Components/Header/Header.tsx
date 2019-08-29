import * as React from 'react';

import Social from '../Social';

import * as styles from './header.css';

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
    );
};

export default Header;

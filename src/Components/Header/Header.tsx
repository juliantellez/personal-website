import * as React from 'react';
import {Link} from 'react-router-dom';

import RoutePath from '../../Routes/Constants/RoutePath';
import Social from '../Social';
import Toggle from '../Toggle';

import * as styles from './header.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.navElement} to={RoutePath.HOME}>
                    Julian Tellez
                </Link>
                <Social />
                <Toggle />
            </nav>
        </header>
    );
};

export default Header;

import * as React from 'react'
import { Link } from 'react-router-dom'

import { RoutePath } from '../../Routes'
import { DarkMode } from '../DarkMode/DarkMode'
import { Social } from '../Social/Social'

import * as styles from './Header.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.navElement} to={RoutePath.HOME}>
                    Julian Tellez
                </Link>
                <Social />
                <DarkMode />
            </nav>
        </header>
    )
}

export { Header }

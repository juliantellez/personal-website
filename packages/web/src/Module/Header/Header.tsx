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
                <Social />
                <div className={styles.navGroup}>
                    <Link className={styles.listElement} to={RoutePath.BLOGS}>
                        <span>Blog</span>
                    </Link>
                    <DarkMode />
                </div>
            </nav>
        </header>
    )
}

export { Header }

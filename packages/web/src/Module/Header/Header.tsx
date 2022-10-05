import * as React from 'react'

import { DarkMode } from '../DarkMode/DarkMode'
import { Social } from '../Social/Social'

import * as styles from './Header.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Social />
                <DarkMode />
            </nav>
        </header>
    )
}

export { Header }

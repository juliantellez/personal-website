import * as React from 'react'
import { Link } from 'react-router-dom'

import { RoutePath } from '../../Routes'

import * as styles from './Footer.scss'

const Footer = () => {
    const getYear = () => new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <ul className={styles.footerLinks}>
                <li>
                    <Link to={RoutePath.HOME}>Julian Tellez © {getYear()}</Link>
                </li>
                <li>
                    <Link to={RoutePath.RESUME}>Resume</Link>
                </li>
            </ul>
        </footer>
    )
}

export { Footer }

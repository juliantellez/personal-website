import * as React from 'react'
import { Link } from 'react-router-dom'

import { RoutePath } from '../../Routes'
import {
    IconCV,
    IconGithub,
    IconInstagram,
    IconLinkedIn,
    IconMail,
    IconTwitter,
} from '../Icon'

import * as styles from './Social.scss'

const urls = {
    twitter: 'https://twitter.com/_juliantellez',
    github: 'https://github.com/juliantellez',
    linkedin: 'https://www.linkedin.com/in/juliantellez',
    instagram: 'https://www.instagram.com/_juliantellez',
    mail: 'mailto:juliantellezmendez@gmail.com?subject=[ Source: juliantellez.com ]',
}

const Social = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.listElement}>
                <Link to={RoutePath.BLOGS}>
                    <span>Blog</span>
                </Link>
            </li>
            <li className={styles.listElement}>
                <Link to={RoutePath.RESUME}>
                    <IconCV />
                </Link>
            </li>
            <li className={styles.listElement}>
                <a href={urls.twitter} target="_blank" rel="noreferrer">
                    <IconTwitter />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.instagram} target="_blank" rel="noreferrer">
                    <IconInstagram />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.linkedin} target="_blank" rel="noreferrer">
                    <IconLinkedIn />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.github} target="_blank" rel="noreferrer">
                    <IconGithub />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.mail}>
                    <IconMail />
                </a>
            </li>
        </ul>
    )
}

export { Social }

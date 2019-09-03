import * as React from 'react';
import {Link} from 'react-router-dom';

import RoutePath from '../../Routes/Constants/RoutePath';
import Blog from '../Icons/Blog';
import Github from '../Icons/Github';
import Instagram from '../Icons/Instagram';
import LinkedIn from '../Icons/LinkedIn';
import Mail from '../Icons/Mail';
import Twitter from '../Icons/Twitter';

import * as styles from './social.css';

const urls = {
    twitter: 'https://twitter.com/_juliantellez',
    github: 'https://github.com/juliantellez',
    linkedin: 'https://www.linkedin.com/in/juliantellez',
    instagram: 'https://www.instagram.com/_juliantellez',
    mail:
        'mailto:juliantellezmendez@gmail.com?subject=[ Source: juliantellez.com ]'
};

const Social = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.listElement}>
                <a href={urls.twitter} target="_blank">
                    <Twitter />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.instagram} target="_blank">
                    <Instagram />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.linkedin} target="_blank">
                    <LinkedIn />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.github} target="_blank">
                    <Github />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.mail}>
                    <Mail />
                </a>
            </li>
        </ul>
    );
};

export default Social;

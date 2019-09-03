import * as React from 'react';
import {Link} from 'react-router-dom';

import RoutePath from '../../Routes/Constants/RoutePath';
import IconBlog from '../Icons/Blog';
import IconGithub from '../Icons/Github';
import IconInstagram from '../Icons/Instagram';
import IconLinkedIn from '../Icons/LinkedIn';
import IconMail from '../Icons/Mail';
import IconTwitter from '../Icons/Twitter';

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
                <Link to={RoutePath.BLOG_POST_LAMBDAS}>
                    <IconBlog />
                </Link>
            </li>
            <li className={styles.listElement}>
                <a href={urls.twitter} target="_blank">
                    <IconTwitter />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.instagram} target="_blank">
                    <IconInstagram />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.linkedin} target="_blank">
                    <IconLinkedIn />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.github} target="_blank">
                    <IconGithub />
                </a>
            </li>
            <li className={styles.listElement}>
                <a href={urls.mail}>
                    <IconMail />
                </a>
            </li>
        </ul>
    );
};

export default Social;

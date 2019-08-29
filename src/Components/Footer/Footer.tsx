import * as React from 'react';

import * as styles from './footer.css';

const Footer = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <span className={styles.footerCopyrights}>
                Julian Tellez © {getYear()}
            </span>
        </footer>
    );
};

export default Footer;

import * as React from 'react';

import * as styles from './footer.css';

const Footer = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerCopyrights}>
                Julian Tellez © {getYear()}
            </div>
        </footer>
    );
};

export default Footer;

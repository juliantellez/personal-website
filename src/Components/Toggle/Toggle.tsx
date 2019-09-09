import * as React from 'react';

import * as styles from './toggle.scss';

const Toggle = () => {
    const onClick = () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', nextTheme);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="toggle"
                className={styles.checkbox}
                onClick={onClick}
            />
            <label htmlFor="toggle" className={styles.label} />
        </div>
    );
};

export default Toggle;

import * as React from 'react';

import * as styles from './toggle.scss';

enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const HTML_ATTRIBUTE_THEME = 'data-theme';

const Toggle = () => {
    const node = document.documentElement;

    const currentTheme = node.getAttribute(HTML_ATTRIBUTE_THEME);
    const defaultChecked = currentTheme === Theme.DARK ? false : true;

    const onClick = () => {
        const nextTheme =
            node.getAttribute(HTML_ATTRIBUTE_THEME) === Theme.DARK
                ? Theme.LIGHT
                : Theme.DARK;
        node.setAttribute(HTML_ATTRIBUTE_THEME, nextTheme);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="toggle"
                defaultChecked={defaultChecked}
                className={styles.checkbox}
                onClick={onClick}
            />
            <label htmlFor="toggle" className={styles.label} />
        </div>
    );
};

export default Toggle;

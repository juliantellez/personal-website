import * as React from 'react'

import { IconDay, IconNight } from '../Icon'

import * as styles from './DarkMode.scss'

enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const HTML_ATTRIBUTE_THEME = 'data-theme'

const DarkMode = () => {
    const [theme, setTheme] = React.useState<Theme>(Theme.LIGHT)
    React.useEffect(() => {
        const node = document.documentElement
        node.setAttribute(HTML_ATTRIBUTE_THEME, theme)
    }, [theme])

    const onClick = () => {
        setTheme((prev) => {
            return prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
        })
    }

    const Icon = theme === Theme.DARK ? IconDay : IconNight

    return (
        <button onClick={onClick} className={styles.button}>
            <Icon />
        </button>
    )
}

export { DarkMode }

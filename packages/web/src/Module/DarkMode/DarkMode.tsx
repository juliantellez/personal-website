import * as React from 'react'

import { IconDay, IconNight } from '../Icon'

import * as styles from './DarkMode.scss'

enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const HTML_ATTRIBUTE_THEME = 'data-theme'

const DarkMode = () => {
    const node = document.documentElement
    const currentTheme =
        node.getAttribute(HTML_ATTRIBUTE_THEME) === Theme.DARK
            ? Theme.DARK
            : Theme.LIGHT
    const [theme, setTheme] = React.useState<Theme>(currentTheme)

    React.useEffect(() => {
        node.setAttribute(HTML_ATTRIBUTE_THEME, theme)
    }, [node, theme])

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

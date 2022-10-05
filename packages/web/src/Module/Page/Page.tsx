import * as React from 'react'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

import * as styles from './Page.scss'

interface PageProps {
    children: React.ReactNode
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <main>
            <Header />
            <div className={styles.main}>{props.children}</div>
            <Footer />
        </main>
    )
}

export { Page }

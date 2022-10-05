import * as React from 'react'

import { Header } from '../Header/Header'

interface PageProps {
    children: React.ReactNode
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <main>
            <Header />
            {props.children}
        </main>
    )
}

export { Page }

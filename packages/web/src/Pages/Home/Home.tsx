import * as React from 'react'

import { getUser, User } from '../../Api/github/getUser'
import { Page } from '../../Module/Page/Page'

import * as styles from './Home.scss'

const HomePage = () => {
    const [user, setUser] = React.useState<User>()
    React.useEffect(() => {
        getUser().then((user) => {
            setUser(user)
        })
    }, [])

    return (
        <Page>
            <div className={styles.banner}>
                <img className={styles.bannerImage} src={user?.avatarUrl} />
                <div className={styles.bannerTitle}>Julian Tellez</div>
                <div className={styles.bannerSubtitle}>Software Engineer</div>
            </div>
        </Page>
    )
}

export { HomePage }

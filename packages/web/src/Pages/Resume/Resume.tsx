import * as React from 'react'

import IBlogPost from '../../Interfaces/IBlogPost'
import { getResume } from '../../Api/github/getResume'
import { Page } from '../../Module/Page/Page'

import * as styles from './Resume.scss'

const ResumePage = () => {
    const [resume, setResume] = React.useState<IBlogPost>()
    React.useEffect(() => {
        getResume().then((r) => {
            setResume(r)
        })
    }, [])

    return (
        <Page>
            <div className={styles.header}>
                <div className={styles.title}>{resume?.title}</div>
                <div className={styles.subtitle}>{resume?.subTitle}</div>
                <div className={styles.metadata}>{resume?.readingTime}</div>
                <div className={styles.tags}>
                    {resume?.tags.map((t) => (
                        <span className={styles.tag} key={t}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                        __html: resume?.description || '',
                    }}
                />
                <div
                    className={styles.body}
                    dangerouslySetInnerHTML={{ __html: resume?.body || '' }}
                />
            </div>
        </Page>
    )
}

export { ResumePage }

import * as React from 'react'

import IBlogPost from '../../Interfaces/IBlogPost'
import { getResumeBackend } from '../../Api/github/getResumeBackend'
import { DownloadPdfButton } from '../../Module/DownloadPdf/DownloadPdfButton'

import * as styles from './Resume.scss'

const ResumeBackendPage = () => {
    const [resume, setResume] = React.useState<IBlogPost>()
    React.useEffect(() => {
        getResumeBackend().then((r) => {
            setResume(r)
        })
    }, [])

    return (
        <main>
            <DownloadPdfButton filename="julian-tellez-cv.pdf" />
            <div className={styles.header}>
                <div className={styles.title}>{resume?.title}</div>
                <div className={styles.subtitle}>{resume?.subTitle}</div>
                <div className={styles.metadata}>{resume?.readingTime}</div>
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
        </main>
    )
}

export { ResumeBackendPage }

import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import IBlogPost from '../../Interfaces/IBlogPost'
import { DownloadPdfButton } from '../../Module/DownloadPdf/DownloadPdfButton'
import { getResume } from '../../Api/github/getResume'
import { ErrorPage } from '../Error/Error'
import { RoutePath } from '../../Routes'
import { BaseError } from '../../Middleware/logger'

import * as styles from './Resume.scss'

const ResumePage = () => {
    const location = useLocation()
    const [resume, setResume] = React.useState<IBlogPost>()
    const [error, setError] = React.useState<BaseError>()

    React.useEffect(() => {
        if (!location.pathname) return
        const resumeId = location.pathname.replace('/resume/', '')

        getResume(resumeId).then((r) => {
            if (!r.body) {
                return setError({
                    message: 'CV POST NOT FOUND',
                    error: new Error('NOT FOUND'),
                })
            }
            setResume(r)
        })
    }, [])

    if (error) {
        return (
            <ErrorPage>
                <div>{error.message}</div>
                <Link to={RoutePath.HOME}>Back to Home</Link>
            </ErrorPage>
        )
    }

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

export { ResumePage }

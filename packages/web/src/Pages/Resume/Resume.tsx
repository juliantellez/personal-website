import * as React from 'react'

import IBlogPost from '../../Interfaces/IBlogPost'
import { getResume } from '../../Api/github/getResume'
import { Page } from '../../Module/Page/Page'

const ResumePage = () => {
    const [resume, setResume] = React.useState<IBlogPost>()
    React.useEffect(() => {
        getResume().then((r) => {
            setResume(r)
        })
    }, [])

    return (
        <Page>
            <div>{resume?.title}</div>
            <div>{resume?.subTitle}</div>
            <div>{resume?.language}</div>
            <div>{resume?.readingTime}</div>
            <div>{resume?.tags}</div>

            <div
                dangerouslySetInnerHTML={{ __html: resume?.description || '' }}
            />
            <div dangerouslySetInnerHTML={{ __html: resume?.body || '' }} />
        </Page>
    )
}

export { ResumePage }

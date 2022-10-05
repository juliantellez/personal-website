import * as React from 'react'

import IBlogPost from '../../Interfaces/IBlogPost'
import { getResume } from '../../Api/github/getResume'

const ResumePage = () => {
    const [resume, setResume] = React.useState<IBlogPost>()
    React.useEffect(() => {
        getResume().then((r) => {
            setResume(r)
        })
    }, [])

    return (
        <div>
            <div>{resume?.title}</div>
            <div>{resume?.subTitle}</div>
            <div>{resume?.language}</div>
            <div>{resume?.readingTime}</div>
            <div>{resume?.tags}</div>

            <div
                dangerouslySetInnerHTML={{ __html: resume?.description || '' }}
            />
            <div dangerouslySetInnerHTML={{ __html: resume?.body || '' }} />
        </div>
    )
}

export { ResumePage }

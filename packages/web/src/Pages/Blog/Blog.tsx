import * as React from 'react'
import { useLocation, Link } from 'react-router-dom'

import { getBlog } from '../../Api/github/getBlog'
import IBlogPost from '../../Interfaces/IBlogPost'
import { BaseError } from '../../Middleware/logger'
import { RoutePath } from '../../Routes'
import { ErrorPage } from '../Error/Error'

const BlogPage = () => {
    const location = useLocation()
    const [blog, setBlog] = React.useState<IBlogPost>()
    const [error, setError] = React.useState<BaseError>()
    React.useEffect(() => {
        if (!location.pathname) return
        const blogId = location.pathname.replace('/blog/', '')

        getBlog(blogId).then((blog) => {
            if (!blog.body) {
                return setError({
                    message: 'BLOG POST NOT FOUND',
                    error: new Error('NOT FOUND'),
                })
            }
            setBlog(blog)
        })
    }, [location])

    if (error) {
        return (
            <ErrorPage>
                <div>{error.message}</div>
                <Link to={RoutePath.BLOGS}>Back to Blogs</Link>
            </ErrorPage>
        )
    }

    return (
        <div>
            <div>Header</div>
            <div>{blog?.title}</div>
            <div>{blog?.subTitle}</div>
            <div>{blog?.language}</div>
            <div>{blog?.readingTime}</div>
            <div>{blog?.tags}</div>

            <div
                dangerouslySetInnerHTML={{ __html: blog?.description || '' }}
            />
            <div dangerouslySetInnerHTML={{ __html: blog?.body || '' }} />
            {error ? <div>ERROR</div> : null}
            <div>Footer</div>
        </div>
    )
}

export { BlogPage }

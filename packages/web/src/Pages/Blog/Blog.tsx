import * as React from 'react'
import { useLocation, Link } from 'react-router-dom'

import { getBlog } from '../../Api/github/getBlog'
import IBlogPost from '../../Interfaces/IBlogPost'
import { BaseError } from '../../Middleware/logger'
import { Page } from '../../Module/Page/Page'
import { RoutePath } from '../../Routes'
import { ErrorPage } from '../Error/Error'

import * as styles from './Blog.scss'

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

    if (!blog?.published) {
        return (
            <Page>
                <div className={styles.header}>
                    <div className={styles.title}>{blog?.title}</div>
                    <div>This Blog is being drafted</div>
                    <Link to={RoutePath.BLOGS}>Back to Blogs</Link>
                </div>
            </Page>
        )
    }

    return (
        <Page>
            <div className={styles.header}>
                <div className={styles.title}>{blog?.title}</div>
                <div className={styles.subtitle}>{blog?.subTitle}</div>
                <div className={styles.tags}>
                    {blog?.tags.map((t) => (
                        <span className={styles.tag} key={t}>
                            {t}
                        </span>
                    ))}
                </div>
                <div className={styles.metadata}>{blog?.readingTime}</div>
                <img className={styles.coverImage} src={blog.coverImage} />
            </div>

            <div className={styles.content}>
                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                        __html: blog?.description || '',
                    }}
                />
                <div
                    className={styles.body}
                    dangerouslySetInnerHTML={{ __html: blog?.body || '' }}
                />
            </div>

            {error ? <div>ERROR</div> : null}
        </Page>
    )
}

export { BlogPage }

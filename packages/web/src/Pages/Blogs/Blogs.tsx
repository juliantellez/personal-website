import * as React from 'react'
import { Link } from 'react-router-dom'

import { ApiResponseBlog, getBlogs } from '../../Api/github/getBlogs'
import { Page } from '../../Module/Page/Page'
import { RoutePath } from '../../Routes'

import * as styles from './Blogs.scss'

const BlogsPage = () => {
    const [blogs, setBlogs] = React.useState<ApiResponseBlog[]>()
    React.useEffect(() => {
        getBlogs().then((r) => {
            setBlogs(r)
        })
    }, [])

    return (
        <Page>
            <div className={styles.header}>
                <div className={styles.title}>Blog Index</div>
            </div>
            <div className={styles.content}>
                {blogs?.map((b) => {
                    return (
                        <Link key={b.name} to={`${RoutePath.BLOGS}/${b.path}`}>
                            <div className={styles.blogCta}>{b.name}</div>
                        </Link>
                    )
                })}
            </div>
        </Page>
    )
}

export { BlogsPage }

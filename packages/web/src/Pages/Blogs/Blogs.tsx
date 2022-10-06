import * as React from 'react'
import { Link } from 'react-router-dom'

import { getBlogs } from '../../Api/github/getBlogs'
import IBlogPost from '../../Interfaces/IBlogPost'
import { Page } from '../../Module/Page/Page'
import { RoutePath } from '../../Routes'

import * as styles from './Blogs.scss'

const BlogsPage = () => {
    const [blogs, setBlogs] = React.useState<IBlogPost[]>()
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
                {blogs
                    ?.filter((b) => b.published)
                    .map((b) => {
                        return (
                            <Link
                                key={b.slug}
                                to={`${RoutePath.BLOGS}/${b.slug}`}
                            >
                                <div className={styles.blogCta}>
                                    <div className={styles.blogCtaTitle}>
                                        {b.title}
                                    </div>
                                    <div
                                        className={styles.blogCtaDescription}
                                        dangerouslySetInnerHTML={{
                                            __html: b.description || '',
                                        }}
                                    />
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </Page>
    )
}

export { BlogsPage }

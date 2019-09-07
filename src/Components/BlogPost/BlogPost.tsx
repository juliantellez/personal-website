import * as React from 'react';

import IBlogPost from '../../../shared/Interfaces/IBlogPost';

import * as styles from './BlogPost.scss';
import BlogPostBody from '../BlogPostBody';

const BlogPost = (props: IBlogPost) => {
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>{props.title}</h1>
            <p className={styles.articleMetadata}>
                {props.created} · {props.readingTime}
            </p>
            <p className={styles.articleTags}>
                {props.tags.map(tag => (
                    <span className={styles.articleTag} key={tag}>
                        {tag}
                    </span>
                ))}
            </p>

            <figure className={styles.articleFigure}>
                <img
                    className={styles.articleFigureImage}
                    src={props.coverImage}
                />
            </figure>

            <BlogPostBody body={props.description + props.body} />
        </article>
    );
};

export default BlogPost;

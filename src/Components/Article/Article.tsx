import * as React from 'react';
import { Link } from 'react-router-dom'

import * as styles from './Article.css'
import Anchor from '../Anchor';

interface IProps {
    title: string;
    metadata: string;
    imageUrl: string;
    description: string;
    link?: string;
    to?: string
}

const Article = (props: IProps) => {
    const HeroLink = props.to ? Link : Anchor;

    return (
        <article className={styles.article}>
            <HeroLink
                className={styles.articleHero}
                style={{backgroundImage: `url(${props.imageUrl})`}}
                href={props.link}
                to={props.to}
            />
            <div className={styles.articleContent}>
                <div className={styles.articleContentTitle}>
                    {props.title}
                </div>
                <div className={styles.articleContentMetadata}>
                    {props.metadata}
                </div>
                <div className={styles.articleContentDescription}>
                    {props.description}
                </div>
            </div>
        </article>
    );
};

export default Article;

import * as React from 'react';

import * as styles from './Article.css'

const Article = () => {
    return (
        <article className={styles.article}>
            <a className={styles.articleHero} href="https://medium.com/dazn-tech/handling-complexity-in-lambda-functions-e7acfbeb920a" target="_blank" />
            <div className={styles.articleContent}>
                <div className={styles.articleContentTitle}>
                Handling complexity in lambda functions
                </div>
                <div className={styles.articleContentMetadata}>
                Feb 8 · 5 min read
                </div>
                <div className={styles.articleContentDescription}>
                Middlewares can handle the complexity of your lambdas while isolating business logic and cross-cutting concerns in reusable components that can be modelled by event cycles.
I have had the luck and pleasure of working with lambda functions recently and boy I am having fun! The idea of having an event-driven execution environment is both daring and exciting. If you are new to the FaaS world, don’t worry, the community has already prepared a curated list of reads for you here and here. Have a browse, drink some coffee. ☕
As you can see, (because you checked at least one of the links, didn’t you?) A huge weight has been lifted. We can now develop, run and manage applications without the intricacy of building and maintaining infrastructure. But with new beginnings, new challenges arise. One of such problems and the reason for this blog is function complexity.
                </div>
            </div>
        </article>
    );
};

export default Article;

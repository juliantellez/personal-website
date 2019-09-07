// tslint:disable:max-line-length

import * as React from 'react';

import Article from '../../Components/Article';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import RoutePath from '../../Routes/Constants/RoutePath';

import * as styles from './Blogs.scss';

const BlogsPage = () => {
    return (
        <Body>
            <Header />
            <div className={styles.content}>
                <Article
                    title="Handling complexity in lambda functions"
                    metadata="Feb 8 · 5 min read"
                    description="Middlewares can handle the complexity of your lambdas while isolating business logic and cross-cutting concerns in reusable components that can be modelled by event cycles.
                    I have had the luck and pleasure of working with lambda functions recently and boy I am having fun! The idea of having an event-driven execution environment is both daring and exciting. If you are new to the FaaS world, don’t worry, the community has already prepared a curated list of reads for you here and here. Have a browse, drink some coffee. ☕
                    As you can see, (because you checked at least one of the links, didn’t you?) A huge weight has been lifted. We can now develop, run and manage applications without the intricacy of building and maintaining infrastructure. But with new beginnings, new challenges arise. One of such problems and the reason for this blog is function complexity."
                    to={RoutePath.BLOG_POST_LAMBDAS}
                    imageUrl="https://miro.medium.com/max/8512/0*kbFW_oMK_p_EP4jH"
                />
            </div>
            <Footer />
        </Body>
    );
};

export default BlogsPage;

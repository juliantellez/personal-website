import * as React from 'react';
import {withRouter} from 'react-router';

import BlogPost from '../../Components/BlogPost';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const BlogPage = () => {
    return (
        <Body>
            <Header />
            <BlogPost />
            <Footer />
        </Body>
    );
};

export default withRouter(BlogPage);

import * as React from 'react';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import Content from './Components/Content';
import Body from '../../Components/Body/Body';

const Home = () => {
    return (
        <Body>
            <Header />
            <Content />
            <Footer />
        </Body>
    );
};

export default Home;

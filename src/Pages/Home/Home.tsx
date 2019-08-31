import * as React from 'react';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import Content from './Components/Content';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
            <Footer />
        </React.Fragment>
    );
};

export default Home;

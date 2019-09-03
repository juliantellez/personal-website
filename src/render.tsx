import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './Routes';

const container = document.getElementById('main');

const App = () => (
    <Router>
        <Routes />
    </Router>
);

ReactDOM.render(<App />, container);

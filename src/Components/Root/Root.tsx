import * as React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import '../../Shared/Styles/global.css';
import ConwaysGameOfLife from '../ConwaysGameOfLife/ConwaysGameGameOfLife';

import RoutePath from './Constants/RoutePath';
import * as styles from './root.css';

const AppRoutes = () => (
    <div className={styles.main}>
        <Switch>
            <Route path={RoutePath.GAME_OF_LIFE}>
                <ConwaysGameOfLife />
            </Route>
            <Route>
                <Home />
            </Route>
        </Switch>
    </div>
);

const Root = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default Root;

import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Home from '../../Pages/Home/Home';
import '../../Shared/Styles/global.css';

import * as styles from './root.css';
import ConwaysGameOfLife from '../ConwaysGameOfLife/ConwaysGameGameOfLife';
import RoutePath from './Constants/RoutePath';


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
)

const Root = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default Root;

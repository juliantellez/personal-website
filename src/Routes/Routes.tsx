import * as React from 'react';
import {Route, Switch} from 'react-router';

import PagesPath from '../Constants/PagesPath';
import lazyImport from '../lazyImport';

import RoutePath from './Constants/RoutePath';

const Home = lazyImport(PagesPath.HOME, PagesPath.HOME, () =>
    Promise.resolve(true)
);

const Blog = lazyImport(PagesPath.BLOG, PagesPath.BLOG, () =>
    Promise.resolve(true)
);

const Blogs = lazyImport(PagesPath.BLOGS, PagesPath.BLOGS, () =>
    Promise.resolve(true)
);

const Resume = lazyImport(PagesPath.RESUME, PagesPath.RESUME, () =>
    Promise.resolve(true)
);

const GameOfLife = lazyImport(
    PagesPath.GAME_OF_LIFE,
    PagesPath.GAME_OF_LIFE,
    () => Promise.resolve(true)
);

const Routes = () => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path={RoutePath.GAME_OF_LIFE} component={GameOfLife} />
                <Route path={RoutePath.BLOG_ROUTE_PARAM} component={Blog} />
                <Route path={RoutePath.BLOG} component={Blogs} />
                <Route path={RoutePath.RESUME} component={Resume} />
                <Route component={Home} />
            </Switch>
        </React.Suspense>
    );
};

export default Routes;

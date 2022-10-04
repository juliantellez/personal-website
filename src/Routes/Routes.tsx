import * as React from 'react';
import {Route, Routes} from 'react-router';

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

const AppRoutes = () => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path={RoutePath.BLOG_ROUTE_PARAM}>
                    <Blog /> 
                </Route>
                <Route path={RoutePath.BLOG}>
                    <Blogs /> 
                </Route>
                <Route path={RoutePath.RESUME}>
                    <Resume /> 
                </Route>
                <Route path={RoutePath.GAME_OF_LIFE}>
                    <GameOfLife /> 
                </Route>
                <Route path={RoutePath.HOME}>
                    <Home /> 
                </Route>
            </Routes>
        </React.Suspense>
    );
};

export default AppRoutes;

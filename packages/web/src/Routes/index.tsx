import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { BlogPage } from '../Pages/Blog/Blog'
import { BlogsPage } from '../Pages/Blogs/Blogs'
import { ErrorPage } from '../Pages/Error/Error'
import { HomePage } from '../Pages/Home/Home'
import { ResumePage } from '../Pages/Resume/Resume'
import { ResumeBackendPage } from '../Pages/Resume/ResumeBackend'

export enum RoutePath {
    HOME = '/',
    BLOGS = '/blog',
    BLOG = '/blog/:blogId',
    RESUME = '/resume',
    RESUME_BACKEND = '/resume-backend',
}

const router = createBrowserRouter([
    {
        path: RoutePath.HOME,
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: RoutePath.BLOGS,
        element: <BlogsPage />,
    },
    {
        path: RoutePath.BLOG,
        element: <BlogPage />,
    },
    {
        path: RoutePath.RESUME,
        element: <ResumePage />,
    },
    {
        path: RoutePath.RESUME_BACKEND,
        element: <ResumeBackendPage />,
    },
])

export { router }

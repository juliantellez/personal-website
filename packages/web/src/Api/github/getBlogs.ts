import { config } from '../config'

import { getRawContent } from './getRawContent'

export interface ApiResponseBlog {
    name: string
    path: string
}

const getBlogs = () => {
    return getRawContent<ApiResponseBlog[]>(config.getBlogs).then(
        (response) => {
            return response.map((r) => {
                return {
                    name: r.name.replace(/-/g, ' '),
                    path: r.name,
                }
            })
        }
    )
}

export { getBlogs }

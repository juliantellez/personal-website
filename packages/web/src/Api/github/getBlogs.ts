import IBlogPost from '../../Interfaces/IBlogPost'
import { config } from '../config'

import { getBlog } from './getBlog'
import { getRawContent } from './getRawContent'

export interface ApiResponseBlog {
    name: string
    path: string
}

const getBlogs = (): Promise<IBlogPost[]> => {
    return getRawContent<ApiResponseBlog[]>(config.getBlogs).then(
        (response) => {
            return Promise.all(response.map((r) => getBlog(r.name)))
        }
    )
}

export { getBlogs }

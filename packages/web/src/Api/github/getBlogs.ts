import IBlogPost from '../../Interfaces/IBlogPost'
import { config } from '../config'

import { getBlog } from './getBlog'
import { get } from './getRawContent'

export interface ApiResponseBlog {
    name: string
    path: string
    html_url: string
}

const getBlogs = (): Promise<IBlogPost[]> => {
    return get<ApiResponseBlog[]>(config.getBlogs).then((response) => {
        return Promise.all(response.map((r) => getBlog(r.name)))
    })
}

export { getBlogs }

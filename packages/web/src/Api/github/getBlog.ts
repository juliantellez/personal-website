import { config } from '../config'
import { parseEvent } from '../../Controller/MarkdownParser/handler'

import { get } from './getRawContent'

interface CommitResponse {
    commit?: {
        author?: {
            date?: string
            name?: string
        }
    }
}

const getBlog = async (id: string) => {
    const data = await get<string>(config.getBlog(id))
    const [commitResponse] = await get<CommitResponse[]>(
        config.getFileCommit(`packages/blogs/${id}`)
    )

    return parseEvent({
        slug: id,
        data,
        updated: commitResponse?.commit?.author?.date,
    })
}

export { getBlog }

import { config } from '../config'
import { parseEvent } from '../../Controller/MarkdownParser/handler'

import { getRawContent } from './getRawContent'

const getBlog = (id: string) => {
    return getRawContent<string>(config.getBlog(id)).then((response) => {
        return parseEvent({
            slug: id,
            data: response,
        })
    })
}

export { getBlog }

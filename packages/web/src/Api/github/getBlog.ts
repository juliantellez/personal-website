import { config } from '../config'
import { parseEvent } from '../../Controller/MarkdownParser/handler'

import { getRawContent } from './getRawContent'

const getBlog = (id: string) => {
    return getRawContent(`${config.blogs}/${id}`).then((response) => {
        return parseEvent({
            data: response,
        })
    })
}

export { getBlog }

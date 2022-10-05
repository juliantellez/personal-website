import { parseEvent } from '../../Controller/MarkdownParser/handler'
import { config } from '../config'

import { getRawContent } from './getRawContent'

const getResume = () => {
    return getRawContent<string>(config.getResume).then((response) => {
        return parseEvent({
            data: response,
        })
    })
}

export { getResume }

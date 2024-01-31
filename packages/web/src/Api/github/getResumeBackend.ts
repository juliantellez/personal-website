import { parseEvent } from '../../Controller/MarkdownParser/handler'
import { config } from '../config'

import { get } from './getRawContent'

const getResumeBackend = () => {
    return get<string>(config.getResumeBackend).then((response) => {
        return parseEvent({
            data: response,
        })
    })
}

export { getResumeBackend }

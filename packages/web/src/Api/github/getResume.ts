import { parseEvent } from '../../Controller/MarkdownParser/handler'
import { config } from '../config'

import { get } from './getRawContent'

const getResume = (path: string) => {
    return get<string>(config.getResume(path)).then((response) => {
        return parseEvent({
            data: response,
        })
    })
}

export { getResume }

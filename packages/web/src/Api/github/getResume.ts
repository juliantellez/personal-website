import { parseEvent } from '../../Controller/MarkdownParser/handler'
import { config } from '../config'

import { get } from './getRawContent'

const getResume = () => {
    return get<string>(config.getResume).then((response) => {
        return parseEvent({
            data: response,
        })
    })
}

export { getResume }

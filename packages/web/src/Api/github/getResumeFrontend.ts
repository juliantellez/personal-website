import { parseEvent } from '../../Controller/MarkdownParser/handler'
import { config } from '../config'

import { get } from './getRawContent'

const getResumeFrontEnd = () => {
    return get<string>(config.getResumeFrontEnd).then((response) => {
        return parseEvent({
            data: response,
        })
    })
}

export { getResumeFrontEnd }

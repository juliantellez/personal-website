import { logger } from '../../Middleware/logger'
import { config } from '../config'

import { getRawContent } from './getRawContent'

const getUser = () => {
    return getRawContent<string>(config.getUser).then((response) => {
        logger.log({ response })
    })
}

export { getUser }

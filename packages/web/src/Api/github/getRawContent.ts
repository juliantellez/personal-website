import axios from 'axios'

import { createBaseError, logger } from '../../Middleware/logger'

const getRawContent = (url: string) => {
    return axios(url)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            logger.error(
                createBaseError({
                    error,
                    message: `Failed to fetch content from ${url}`,
                })
            )
        })
}

export { getRawContent }

import { createBaseError, logger } from "../../Middleware/logger"

const getRawContent = (url: string) => {
    return fetch(url).then(response => {
        return response.json()
    })
    .catch(error => {
        logger.error(createBaseError({
            error,
            message: `Failed to fetch content from ${url}`
        }))
    })
}

export {getRawContent}

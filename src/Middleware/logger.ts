const logger = console

interface BaseError {
    message: string
    error: Error
}

const createBaseError = (e: BaseError) => {
    return e.error
}

export {logger, createBaseError}

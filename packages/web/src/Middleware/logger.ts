const logger = console

export interface BaseError {
    message: string
    error: Error
}

const createBaseError = (e: BaseError) => {
    return e.error
}

export { logger, createBaseError }

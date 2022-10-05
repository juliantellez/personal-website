import * as React from 'react'
import { useRouteError } from 'react-router-dom'

interface ErrorMessage {
    status: number
    statusText: string
    message: string
    data: unknown
}

const ErrorPage = () => {
    const error = useRouteError() as ErrorMessage

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export { ErrorPage }

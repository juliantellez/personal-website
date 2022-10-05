import * as React from 'react'
import { useRouteError } from 'react-router-dom'

interface ErrorMessage {
    status: number
    statusText: string
    message: string
    data: unknown
}

interface ErrorPageProps {
    children?: React.ReactNode
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
    const error = useRouteError() as ErrorMessage

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error ? error.statusText || error.message : null}</i>
            </p>
            {props.children}
        </div>
    )
}

export { ErrorPage }

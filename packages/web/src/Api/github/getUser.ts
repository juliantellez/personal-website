import { config } from '../config'

import { getRawContent } from './getRawContent'

const getUser = () => {
    return getRawContent<string>(config.getUser).then((response) => {
        console.log({ response })
    })
}

export { getUser }

import { config } from '../config'

import { getRawContent } from './getRawContent'

interface UserResponse {
    avatar_url: string
}

export interface User {
    avatarUrl: string
}
const getUser = (): Promise<User> => {
    return getRawContent<UserResponse>(config.getUser).then((response) => {
        return {
            avatarUrl: response.avatar_url,
        }
    })
}

export { getUser }

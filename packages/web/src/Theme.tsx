import { extendTheme } from '@chakra-ui/react'

import './Styles/global.scss'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ colors })

export { theme }

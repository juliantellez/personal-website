import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { router } from './Routes'
import { theme } from './Theme'

const App: React.FC = () => (
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
)

export { App }

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './Routes'

const App: React.FC = () => (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

const container = document.getElementById('main') as HTMLElement
const root = createRoot(container)
root.render(<App />)

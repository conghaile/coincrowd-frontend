import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import Root from './routes/Root'
import About from './routes/About'
import Coin from './routes/Coin'
import ErrorPage from './components/Error-page'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
                errorElement: <ErrorPage />
            },
            {
                path: "coins/*",
                element: <Coin />,
                errorElement: <ErrorPage />
            },
            {
                path: "about/",
                element: <About />,
                errorElement: <ErrorPage />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
            <RouterProvider router={router} />
    </ChakraProvider>
)
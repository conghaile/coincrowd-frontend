import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import Root from './routes/Root'
import About from './routes/About'
import ErrorPage from './components/Error-page'
import './styles/styles.css'

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
            },
            {
                path: "about/",
                element: <About />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
const Error = lazy(() => import("../../pages/Error/Error"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    }
])
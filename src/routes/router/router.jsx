import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import AddProducts from "../../pages/AddProducts/AddProducts";
import MyCart from "../../pages/MyCart/MyCart";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

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
            {
                path: '/add-product',
                element: <AddProducts />
            },
            {
                path: '/my-cart',
                element: <MyCart />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
        ]
    }
])
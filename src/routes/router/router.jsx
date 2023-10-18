import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import AddProducts from "../../pages/AddProducts/AddProducts";
import MyCart from "../../pages/MyCart/MyCart";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import BrandAllProducts from "../../pages/BrandAllProducts/BrandAllProducts";
import ViewAllProducts from "../../pages/ViewAllProducts/ViewAllProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch("http://localhost:5000/brands")
            },
            {
                path: '/all-products',
                element: <ViewAllProducts />,
                loader: async () => await fetch("http://localhost:5000/products")
            },
            {
                path: '/brand-products/:brand',
                element: <BrandAllProducts />,
                loader: async ({ params }) => await fetch(`http://localhost:5000/products/${params?.brand}`)
            },
            {
                path: '/add-product',
                element: <AddProducts />,
                loader: async () => await fetch("http://localhost:5000/brands")
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
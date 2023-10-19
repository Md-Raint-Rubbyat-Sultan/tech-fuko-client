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
import UpdateProduct from "../../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch("https://tech-fuko-server.vercel.app/brands")
            },
            {
                path: '/all-products',
                element: <ViewAllProducts />,
                loader: async () => await fetch("https://tech-fuko-server.vercel.app/products")
            },
            {
                path: '/brand-products/:brand',
                element: <BrandAllProducts />,
                loader: async ({ params }) => await fetch(`https://tech-fuko-server.vercel.app/brand-products/${params?.brand}`)
            },
            {
                path: '/update-products/:id',
                element: <PrivetRoute><UpdateProduct /></PrivetRoute>,
                loader: async ({ params }) => await fetch(`https://tech-fuko-server.vercel.app/single-products/${params?.id}`)
            },
            {
                path: '/products-details/:id',
                element: <PrivetRoute><ProductDetails /></PrivetRoute>,
                loader: async ({ params }) => await fetch(`https://tech-fuko-server.vercel.app/single-products/${params?.id}`)
            },
            {
                path: '/add-product',
                element: <PrivetRoute><AddProducts /></PrivetRoute>,
                loader: async () => await fetch("https://tech-fuko-server.vercel.app/brands")
            },
            {
                path: '/my-cart',
                element: <PrivetRoute><MyCart /></PrivetRoute>,
                loader: async () => {
                    const resOfProduct = await fetch('https://tech-fuko-server.vercel.app/products');
                    const productData = await resOfProduct.json();
                    const resOfCart = await fetch('https://tech-fuko-server.vercel.app/cart-products');
                    const cartData = await resOfCart.json();
                    return [productData, cartData];
                }
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
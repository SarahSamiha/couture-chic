import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Root/Pages/Home/Home";
import ErrorPage from "../Root/Pages/ErrorPage/ErrorPage";
import AddProduct from "../Root/Pages/AddProduct/AddProduct";
import AddBrand from "../Root/Pages/AddBrand/AddBrand";
import BrandProducts from "../Root/Pages/BrandProducts/BrandProducts";
import MyCart from "../Root/Pages/MyCart/MyCart";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import UpdateProduct from "../Root/Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Root/Pages/ProductDetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import AllProducts from "../Root/Pages/Home/AllProducts/AllProducts";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands'),
                errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        path:'/',
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('http://localhost:5000/products'),
                    }
                ],
            },
            {
                path: "/brands/:id",
                element: <BrandProducts></BrandProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`),
            },
            {
                path: '/addBrand',
                element: <PrivateRoutes><AddBrand></AddBrand></PrivateRoutes>
            },
            {
                path: '/addProduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`), 
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            },
            {
                path: '/myCart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/cart'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
            
        ]
    },
]);

export default router;
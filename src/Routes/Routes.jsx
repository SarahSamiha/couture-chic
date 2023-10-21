import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Root/Pages/Home/Home";
import ErrorPage from "../Root/Pages/ErrorPage/ErrorPage";
import AddProduct from "../Root/Pages/AddProduct/AddProduct";
import AddBrand from "../Root/Pages/AddBrand/AddBrand";



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
            },
            {
                path: '/addBrand',
                element: <AddBrand></AddBrand>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            
        ]
    },
]);

export default router;
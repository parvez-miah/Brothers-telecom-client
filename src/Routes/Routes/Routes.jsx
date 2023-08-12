import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../Layout/main";
import Home from "../../Pages/Home/Home";
import Register from "../../Authentication/Register/Register";
import Login from "../../Authentication/Login/Login";
import DashBoard from "../../DashBoard/DashBoard/DashBoard";
import MyCart from "../../DashBoard/MyCart/MyCart";
import ProductTab from "../../Products/ProductTab/ProductTab";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <ProductTab></ProductTab>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },

    {
        path:'dashboard',
        element:<DashBoard></DashBoard>,

        children:[
            {
                path:'mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);


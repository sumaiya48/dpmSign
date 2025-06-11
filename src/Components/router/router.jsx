import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import OurProducts from "../Pages/OurProducts/OurProducts";
import OurServices from "../Pages/OurServices/OurServices";
import Clients from "../Pages/Clients/Clients";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/ourproducts',
            element:<OurProducts></OurProducts>
        },
        {
            path:'/services',
            element:<OurServices></OurServices>
        },
        {
            path:'/ourclients',
            element:<Clients></Clients>
        },
        {
            path:'/aboutus',
            element:<AboutUs></AboutUs>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }


    ]
  },
]);

export default router
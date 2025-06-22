import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import OurProducts from "../Pages/OurProducts/OurProducts";
import OurServices from "../Pages/OurServices/OurServices";
import Clients from "../Pages/Clients/Clients";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";

// Admin panel
import AdminPanelLayout from "../Layouts/AdminPanelLayout";
import AdminDashboard from "../AdminPanel/Dashboard/AdminDashboard";
import PosSystem from "../AdminPanel/PosSystem/PosSystem";
import Coupons from "../AdminPanel/Coupons/Coupons";
import Media from "../AdminPanel/Media/Media";
import Customers from "../AdminPanel/Customers/Customers";
import Staff from "../AdminPanel/Staff/Staff";
import Courier from "../AdminPanel/Courier/Courier";
import Transactions from "../AdminPanel/Transactions/Transactions";
import Newsletter from "../AdminPanel/Newsletter/Newsletter";
import Inqueries from "../AdminPanel/Inqueries/Inqueries";
import Jobs from "../AdminPanel/Jobs/Jobs";
import Blog from "../AdminPanel/Blog/Blog";
import FAQ from "../AdminPanel/FAQ/FAQ";
import Order from "../AdminPanel/Order/Order";
import CompletedOrder from "../AdminPanel/Order/CompletedOrder";
import NewRequest from "../AdminPanel/Order/NewRequest";
import CancelledOrder from "../AdminPanel/Order/CancelledOrder";
import ProductList from "../AdminPanel/Products/ProductList";
import Categories from "../AdminPanel/Products/Categories";
import AddProduct from "../AdminPanel/Products/AddProduct";
import ProductReview from "../AdminPanel/Products/ProductReview";
import ReturnPolicy from "../Pages/Policy/ReturnPolicy";
import ExchangePolicy from "../Pages/Policy/ExchangePolicy";
import PrivacyPolicy from "../Pages/Policy/PrivacyPolicy";
import Terms from "../Pages/Policy/Terms";
import AccordionItem from "../Pages/Policy/AccordionItem";
import ProductDetails from "../SharedComponents/ProductDetails.jsx";
import AccountPage from "../Pages/AccountPage/AccountPage.jsx";
import PartnerWithUs from "../SharedComponents/PartnerWithUs/PartnerWithUs.jsx";

// Admin Panel Pages


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/ourproducts',
        element: <OurProducts></OurProducts>
      },
      {
        path:'/products/:productId',
        element:<ProductDetails></ProductDetails>
      },
      {
        path: '/services',
        element: <OurServices></OurServices>
      },
      {
        path: '/ourclients',
        element: <Clients></Clients>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/returnpolicy',
        element:<ReturnPolicy></ReturnPolicy>
      },
      {
        path:'/exchangepolicy',
        element:<ExchangePolicy></ExchangePolicy>
      },
      {
        path:'/privacypolicy',
        element:<PrivacyPolicy></PrivacyPolicy>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      },
      {
        path:'/account',
        element:<AccountPage></AccountPage>
      },
      {
        path:'/faq',
        element:<AccordionItem></AccordionItem>
      },
      {
        path:'/partnerwithus',
        element:<PartnerWithUs></PartnerWithUs>
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminPanelLayout></AdminPanelLayout>,
    children: [
      { path: "dashboard", element: <AdminDashboard></AdminDashboard> },
      { path: "pos", element: <PosSystem></PosSystem>},

      // Order Dropdown
      { path: "orders/all", element: <Order></Order> },
      { path: "orders/neworder", element: <NewRequest></NewRequest> },
      { path: "orders/completed", element: <CompletedOrder></CompletedOrder> },
      { path: "orders/cancelledorder", element: <CancelledOrder></CancelledOrder> },

      // Products Dropdown
      { path: "products/all", element: <ProductList></ProductList> },
      { path: "products/categories", element: <Categories></Categories> },
      { path: "products/add", element: <AddProduct></AddProduct> },
      { path: "products/review", element: <ProductReview></ProductReview> },

      { path: "coupons", element: <Coupons></Coupons>},
      { path: "media", element: <Media></Media> },
      { path: "customers", element: <Customers></Customers> },
      { path: "staff", element: <Staff></Staff> },
      { path: "courier", element: <Courier></Courier> },
      { path: "transactions", element: <Transactions></Transactions> },
      { path: "newsletter", element: <Newsletter></Newsletter> },
      { path: "inquiries", element: <Inqueries></Inqueries> },
      { path: "jobs", element: <Jobs></Jobs> },
      { path: "blogs", element: <Blog></Blog> },
    ]
  }
]);

export default router;

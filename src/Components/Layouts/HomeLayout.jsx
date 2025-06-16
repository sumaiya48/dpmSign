import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />
      
      {/* This ensures the page scrolls to top on route change */}
      <ScrollRestoration />
      
      <Outlet />
      <Footer />
    </div>
  );
}

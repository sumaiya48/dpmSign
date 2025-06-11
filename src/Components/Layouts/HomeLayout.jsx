import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer";

export default function HomeLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

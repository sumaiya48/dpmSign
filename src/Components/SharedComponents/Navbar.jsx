import React, { useState, useEffect } from "react";
import {
  BsTelephone,
  BsSearch,
  BsCart,
} from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import { useCart } from "../Context/CartContext";


export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ourproducts", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/ourclients", label: "Our Clients" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const linkClasses = (path) =>
    path === currentPath
      ? "text-[#45B6E7] underline underline-offset-4 font-bold"
      : "hover:text-[#45B6E7]";

  useEffect(() => {
    fetch("https://test.api.dpmsign.com/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data.products));
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFiltered([]);
    } else {
      const lower = searchTerm.toLowerCase();
      const matched = products.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.category?.toLowerCase().includes(lower)
      );
      setFiltered(matched);
    }
  }, [searchTerm, products]);

  return (
    <div>
      {/* Top Contact Info */}
      <div className="hidden lg:flex bg-gradient-to-r from-[#45B6E7] to-[#4B54A1] text-white py-3 text-[14px]">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <BsTelephone className="text-base" />
              <span>+8801958253962</span>
            </div>
            <div className="flex gap-2 items-center">
              <BsTelephone className="text-base" />
              <span>+8801958253965</span>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineMailOutline className="text-lg" />
              <span>info@dpmsign.com</span>
            </div>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/dpmsign/" target="_blank"><FiFacebook /></a>
            <a href="https://www.instagram.com/dpmsign/" target="_blank"><FiInstagram /></a>
            <a href="https://www.linkedin.com/company/dpmsign/" target="_blank"><FiLinkedin /></a>
            <a href="https://www.youtube.com/@dpmsign/" target="_blank"><AiOutlineYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar bg-base-100 shadow-sm py-6 px-4 lg:px-8">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-2xl">
            <img src="/assets/logo-DnkaV0mo.svg" alt="DPM Sign Logo" className="h-10" />
          </Link>
        </div>

        <div className="navbar-end gap-4">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 text-sm font-bold uppercase items-center">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} className={linkClasses(path)}>{label}</Link>
              </li>
            ))}
            <li>
              <button onClick={() => setShowSidebar(true)} className="btn btn-ghost text-lg">
                <BsSearch />
              </button>
            </li>
            <li>
              <button onClick={() => setShowCart(true)} className="relative btn btn-ghost text-lg">
  <BsCart />
  {cart.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cart.length}
    </span>
  )}
</button>
            </li>
            <li>
              <Link to="/account" className={linkClasses("/account")}>
                <RxAvatar className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Sidebar */}
      {showSidebar && (
        <div className="fixed top-0 right-0 w-96 max-w-full h-full bg-white z-50 shadow-xl p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Search Products</h3>
            <button onClick={() => setShowSidebar(false)} className="text-2xl text-gray-600 hover:text-red-500">✖</button>
          </div>
          <input
            type="text"
            placeholder="Search by product or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full mb-6"
          />
          {filtered.length > 0 ? (
            <div className="space-y-4">
              {filtered.map((item) => (
                <div key={item.productId} className="flex items-center border p-3 rounded-md shadow-sm gap-4">
                  <img
                    src={item.imageUrl || "/assets/default-product.png"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.category || "Uncategorized"}</p>
                    <button
                      className="btn btn-ghost text-[#45B6E7] text-sm underline"
                      onClick={() => {
                        navigate(`/products/${item.productId}`);
                        setShowSidebar(false);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchTerm && <p className="text-gray-400">No matching products found.</p>
          )}
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <CartSidebar  onClose={() => setShowCart(false)}></CartSidebar>
      )}
    </div>
  );
}

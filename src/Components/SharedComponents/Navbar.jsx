import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ourproducts", label: "Our Products" },
    { path: "/services", label: "Services" },
    { path: "/ourclients", label: "Our Clients" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const linkClasses = (path) =>
    path === currentPath
      ? "text-[#45B6E7] underline underline-offset-4 font-bold"
      : "hover:text-[#45B6E7]";

  return (
    <div>
      {/* Contact Info - only for lg and above */}
      <div className="hidden lg:flex bg-gradient-to-r from-[#45B6E7] to-[#4B54A1] text-white py-3 text-[18px]">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center px-6 gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <BsTelephone className="text-xl" />
              <span>+8801958253962</span>
            </div>
            <div className="flex items-center gap-2">
              <BsTelephone className="text-xl" />
              <span>+8801958253965</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMailOutline className="text-2xl" />
              <span>info@dpmsign.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <FiFacebook />
            <FiInstagram />
            <FiLinkedin />
            <AiOutlineYoutube />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar st bg-base-100 shadow-sm py-8 px-4 lg:px-8">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-2xl">
            <img
              src="/assets/logo-DnkaV0mo.svg"
              alt="DPM Sign Logo"
              className="h-12"
            />
          </Link>
        </div>

        <div className="navbar-end gap-4">
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-[#45B6E7] text-3xl"
            >
              <IoMdMenu />
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-56 text-lg font-medium">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className={linkClasses(path)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 text-[16px] font-bold uppercase">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} className={linkClasses(path)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

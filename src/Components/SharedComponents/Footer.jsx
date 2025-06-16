import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import payment from '/assets/payment.png'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#101010] text-white pt-10">
            <div className="w-9/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xl pb-10 ">
                {/* Column 1 */}
                <div>
                    <h3 className="font-bold mb-3">All Policy</h3>
                    <ul className="space-y-2 text-sm">
                        <Link to='/returnpolicy'><li>Return Policy</li></Link>
                        <Link to='/exchangepolicy'><li>Exchange Policy</li></Link>
                        <Link to='/privacypolicy'><li>Privacy Policy</li></Link>
                        
                        
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-bold mb-3">Need Help</h3>
                    <ul className="space-y-2 text-sm">
                        <Link to='/contact'><li>Contact Us</li></Link>
                        <Link to='/faq'><li>FAQs</li></Link>
                        <Link to='/terms'><li>Terms & Conditions</li></Link>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-bold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Partner With Us</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="font-bold mb-3">Stay Connected</h3>
                    <ul className="space-y-2 text-sm">
                        <li>📞 +8801958253962</li>
                        <li>📞 +8801958253965</li>
                        <li>📧 info@dpmsign.com</li>
                    </ul>
                </div>
            </div>
            <hr className=" border-gray-700 w-11/12 mx-auto" />

            {/* We Accept Section */}
            <div className="w-11/12 mx-auto py-10">
                <div className="flex flex-col md:flex-row items-center gap-20  p-4 rounded-md shadow-md">

                    {/* Payment Image */}
                    <div className="">
                        <h3 className="mb-4 text-2xl font-bold">We Accept</h3>
                        <img
                            src={payment}
                            alt="Payment Options"
                            className="w-full max-w-6xl h-auto  bg-white p-4 rounded"
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-end text-white">
                        <p className="mb-2 font-semibold">Find Us On</p>
                        <div className="flex gap-2 text-xl">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaYoutube />
                        </div>
                    </div>

                </div>
            </div>



            {/* Bottom Section */}
            <div className="w-11/12 mx-auto pb-6 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-4 gap-4">
                <div className="text-base">
                    <div className="flex gap-20">
                        <p><strong>BIN:</strong> 003868216-0201</p>
                    <p><strong>TL:</strong> TRAD/DSCC/012641/2022</p>
                    </div>
                    <p>
                        Copyright © 2025 Dhaka Plastic & Metal.{" "}
                        {/* <span className="text-blue-400 underline cursor-pointer">Sitemap</span>,  */}
                        Developed by Recursive.
                    </p>
                </div>

                
            </div>
        </footer>
    );
}

import React from "react";
import { FaCheckCircle, FaGift } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function PartnerWithUs() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Grow with Dhaka Plastic & Metal
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Expand Your Opportunities Today!
          </p>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Campaign Ambassador Program */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex gap-3 items-center mb-4">
                <div className='border-2  p-3 w-[40px] h-[40px] flex rounded-full bg-[#E3F2FA] items-center'>
                                              
                                              <FaGift className='text-xl mx-auto text-[#1d9cd7]' />
                                              
                                          </div>
                <h3 className="text-lg font-semibold text-gray-800 ">
              Campaign Ambassador Program
            </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              Become a promotional ambassador and work alongside our campaigns, directly earn with incentives. Promote Dhaka Plastic & Metal products online and offline.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Earn 10%-15% commission on confirmed sales (not based on a cart)
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Flexible work hours and location
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Build a quality portfolio of marketing and referrals
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Receive DPM merchandise for creating
              </li>
            </ul>
          </div>

          {/* Small Business Program */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🏪 Small Business Partnership Program
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Expand your business partnership by partnering with us. Buy our manufactured products at a discount and resell to your customers or partners.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Receive discounts for bulk orders
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Access priority listings and supplier catalog
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Additional monthly income options
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-400 mt-1" /> Work at your pace
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              Who can apply? <br /> Small business owners or retailers with valid business registration or ID
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-700">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            "Apply",
            "Verification",
            "Marketing & Promotion",
            "Order Submission",
            "Payment & Bonuses",
            "Rewards",
          ].map((step) => (
            <div
              key={step}
              className="border border-gray-200 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="text-md font-semibold text-gray-800 mb-2">{step}</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="border rounded-lg shadow-sm bg-blue-50 p-6 text-center mb-20">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Start Growing with Us!
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <MdEmail className="text-blue-500" /> contact@dpmsign.com
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-blue-500" /> +8801958253965
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-blue-500" /> Head Office: 3rd Floor, 22/23 Kalabagan, Mirpur Road, Dhaka 1205
            </div>
          </div>
          <button className="btn btn-info text-white gap-2">
            Apply Now <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
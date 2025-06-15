import React from "react";
import { FaUpload } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div>
        <div className="w-11/12 mx-auto py-10">

        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name *</span>
              </label>
              <input type="text" placeholder="Your name" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email *</span>
              </label>
              <input type="email" placeholder="you@example.com" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Phone Number *</span>
              </label>
              <input type="text" placeholder="017..." className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Your Company/Organization</span>
              </label>
              <input type="text" placeholder="Your company" className="input input-bordered w-full" />
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <select className="select select-bordered w-full">
              <option disabled selected>Inquiry Type</option>
              <option>Product Info</option>
              <option>Bulk Order</option>
              <option>Custom Design</option>
              <option>Other</option>
            </select>
          </div>

          {/* Upload Design File */}
          <div className="border-2 border-dashed border-gray-300 p-6 rounded text-center">
            <div className="text-gray-400 mb-2 flex justify-center">
              <FaUpload size={24} />
            </div>
            <p className="text-gray-600">Click to upload design file. Max 5 images.</p>
            <input type="file" multiple accept="image/*" className="mt-2 file-input file-input-bordered w-full max-w-xs" />
          </div>

          {/* Message */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your message *</span>
            </label>
            <textarea className="textarea textarea-bordered w-full" rows={5} required></textarea>
          </div>

          {/* Button */}
          <button className="btn btn-info w-full text-white font-semibold">
            Send Inquiry
          </button>
        </form>

        {/* Illustration Image */}
        <div className="hidden lg:block">
          <img src="/assets/contact.svg" alt="Contact" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div>
    </div>
  );
}

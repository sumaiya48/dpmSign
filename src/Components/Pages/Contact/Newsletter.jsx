import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import newsletterImg from '/assets/newsletter.svg'; // আপনার ইমেজ path অনুযায়ী ঠিক করবেন

export default function Newsletter() {
  return (
    <div className="bg-base-200 border rounded-lg my-10 w-10/12 mx-auto border-gray-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={newsletterImg} alt="Newsletter" className="w-full max-w-md mx-auto" />
        </div>

        {/* Text + Form Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Stay Updated with Our Latest Products and Offers
          </h2>
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter to receive updates on new arrivals, exclusive deals, and more.
          </p>
          
          <div className="flex justify-center md:justify-start gap-2">
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-success gap-2">
              <FaPaperPlane /> Subscribe!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

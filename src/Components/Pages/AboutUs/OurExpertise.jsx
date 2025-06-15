import React from 'react';
import { FaAward, FaGift, FaPaintBrush } from 'react-icons/fa';

export default function OurExpertise() {
  return (
    <div className="bg-white py-10 px-4 md:px-20 text-center">
      <div className="text-center mb-8 w-9/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Expertise</h2>
        <p className="sm:text-lg w-10/12 mx-auto text-gray-600 font-semibold mt-2">
          Our commitment to precision and excellence ensures that every product reflects your unique identity.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F9FBFD] shadow-md p-6 rounded-lg border-2 border-blue-200 py-5">
          <div className='border-2 mx-auto p-3 w-[50px] h-[50px] flex items-center rounded-full bg-[#E3F2FA]'>
                              
                              <FaPaintBrush className='text-3xl mx-auto text-[#1d9cd7]' />
                              
                          </div>
          
          <h3 className="text-xl font-semibold">3D Signage Solutions</h3>
          <p className="text-gray-600">3D LED signs, acrylic engravings, backlit signage</p>
        </div>
        <div className="bg-[#F9FBFD] border-2 border-blue-200 shadow-md p-6 rounded-lg">
          <div className='border-2 mx-auto p-3 w-[50px] h-[50px] flex items-center rounded-full bg-[#E3F2FA]'>
                              
                              <FaAward className='text-3xl mx-auto text-[#1d9cd7]' />
                              
                          </div>
        
          <h3 className="text-xl font-semibold">Award Plaques</h3>
          <p className="text-gray-600">Customized recognition plaques for institutions, corporates, and events.</p>
        </div>
        <div className="bg-[#F9FBFD] border-2 border-blue-200 shadow-md p-6 rounded-lg">
          <div className='border-2 mx-auto p-3 w-[50px] h-[50px] flex items-center rounded-full bg-[#E3F2FA]'>
                              
                              <FaGift className='text-3xl mx-auto text-[#1d9cd7]' />
                              
                          </div>
          
          <h3 className="text-xl font-semibold">Corporate Gifts</h3>
          <p className="text-gray-600">Personalized keychains, mugs, paperweights, table stands, and nameplates.</p>
        </div>
      </div>
    </div>
  );
}

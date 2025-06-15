import React from 'react';

export default function ServiceCard({
  title,
  subtitle,
  description,
  listItems = [],
  industries,
  buttonText,
  image,
  buttonLink
}) {
  return (
    <div className="bg-white border shadow-sm rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
        
        {/* Text Section */}
        <div>
          <h3 className="text-md font-semibold text-blue-600">{title}</h3>
          <h2 className="text-lg md:text-xl font-bold mb-2">{subtitle}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          

          {listItems?.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold border-black">What We Offer:</h4>
              <hr className='text-black py-3' />
              <ul className="list-disc list-inside text-sm text-gray-700">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {industries && (
            <div className="mb-4">
              <h4 className="font-semibold">Industries We Serve</h4>
              <p className="text-sm text-gray-700">{industries}</p>
            </div>
          )}

          {buttonText && (
            <a href={buttonLink || '#'} className="btn btn-sm btn-outline mt-2">
              {buttonText}
            </a>
          )}
        </div>

        {/* Image Section */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-lg object-contain  w-full"
          />
        </div>
      </div>
    </div>
  );
}

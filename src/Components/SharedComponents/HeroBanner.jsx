import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroBanner({ title, description, path = [], buttonText, buttonLink }) {
  return (
    <div className="relative h-[300px] lg:h-[300px] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(/assets/hero-banner-DjDckvCl.jpg)`
        }}
      ></div>

      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">{title}</h1>
        <div className="w-16 h-1 bg-white mb-4" />
        <p className="mb-6 w-7/12 mx-auto">{description}</p>

        {/* Breadcrumb Path */}
        <div className="flex justify-center gap-2 text-lg mb-4">
          {path.map((item, index) => (
            <React.Fragment key={index}>
              {item.link ? (
                <Link to={item.link} className="underline text-white hover:text-[#45B6E7]">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < path.length - 1 && <span className="mx-1">&gt;</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Optional Button */}
        {buttonText && buttonLink && (
          <Link
            to={buttonLink}
            className="bg-[#45B6E7] hover:bg-[#3a99c2] text-white font-semibold py-2 px-6 rounded"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}

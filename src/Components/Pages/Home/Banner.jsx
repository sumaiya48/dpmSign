import React from "react";

export default function Banner() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white flex items-center px-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dl1lwmw6h/video/upload/v1742982151/dpm-muted_zymymf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-700 opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl pl-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Dhaka Plastic & Metal
        </h3>
        <p className="mb-6 text-lg md:text-xl">
          Your Premier Destination for 3D Signage, Award Plaques & <br /> Corporate Gift Solutions.
        </p>
        <button className="bg-[#45B6E7] hover:bg-[#3a99c2] text-white font-semibold py-4 px-7 rounded">
          Request a Quote
        </button>
      </div>
    </div>
  );
}

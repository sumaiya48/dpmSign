import React, { useEffect, useState } from "react";

const images = [
  {
    src: "/assets/Waterproof LED Module Light-C1BN7KP9.jpg",
    alt: "Premium Quality Acrylic Sheet",
    caption: "Premium Quality Acrylic Sheet",
  },
  {
    src: "/assets/Aluminium composite panel ACP-DcvD9LzN.jpg",
    alt: "Blue Acrylic Sheet",
    caption: "Blue Acrylic Sheet",
  },
  {
    src: "/assets/Crystal Glass-2cA6VpiR.jpg",
    alt: "Crystal Glass",
    caption: "Crystal Glass",
  },
  {
    src: "/assets/Imported Power Supply-zVzuLhFa.jpg",
    alt: "Imported Power Supply",
    caption: "Imported Power Supply",
  },
  {
    src: "/assets/Iron _ Aluminium Channel-DiG3ekKM.jpg",
    alt: "Iron & Aluminium Channel",
    caption: "Iron & Aluminium Channel",
  },
  {
    src: "/assets/Natural Wood-DZvh-F4z.jpg",
    alt: "Natural Wood",
    caption: "Natural Wood",
  },
  {
    src: "/assets/Premium Quality Acrylic Sheet-BrX631Mn.jpg",
    alt: "Premium Acrylic Sheet",
    caption: "Premium Acrylic Sheet",
  },
  {
    src: "/assets/PVC Sheet-Cwd_xl2s.jpg",
    alt: "PVC Sheet",
    caption: "PVC Sheet",
  },
  {
    src: "/assets/Stainless Steel Sheet-DRb_CkmN.jpg",
    alt: "Stainless Steel Sheet",
    caption: "Stainless Steel Sheet",
  },
];

// Clone first image at the end
const extendedImages = [...images, images[0]];

export default function Materials() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Reset when reaching the clone
  useEffect(() => {
    if (current === extendedImages.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 700); // Match transition duration
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [current]);

  return (
    <div className="max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          We Use Best Quality Materials
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          Premium Materials for Durable and Stunning Results
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-36 items-center">
        {/* Left: Carousel */}
        <div className="flex-1 flex flex-col items-center w-full max-w-md lg:max-w-lg">
          <div className="w-full overflow-hidden border border-[#45B6E7] rounded shadow-sm relative">
            <div
              className={`flex ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {extendedImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover"
                />
              ))}
            </div>
          </div>
          <p className="mt-2 font-semibold text-center text-sm sm:text-base">
            {images[current % images.length].caption}
          </p>

          {/* Dots */}
          <div className="flex space-x-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current % images.length ? "bg-[#45B6E7]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Description */}
        <div className="flex-1 text-gray-800 text-base sm:text-lg font-semibold max-w-xl">
          <p className="mb-4">
            Dhaka Plastic & Metal is committed to delivering exceptional quality and durability in every product we create. We source and use premium materials to ensure our 3D signage, award plaques (Crests), and corporate branding solutions meet the highest industry standards. From PK Acrylic and 100% waterproof LED module lights to Aluminium Composite Panels (ACP) and Crystal Glass, we carefully select materials that provide strength, elegance, and longevity. Whether it's stainless steel sheets, natural wood, or PVC sheets, each component is chosen to guarantee a flawless finish and lasting performance in all weather conditions.
          </p>
          <p>
            Our advanced iron and aluminum channels, combined with high-efficiency power supplies, deliver structural stability and brilliant lighting effects for signage. These materials not only enhance visual appeal but also ensure energy efficiency and low maintenance. At Dhaka Plastic & Metal, we combine cutting-edge technology with premium resources to craft products that stand the test of time—offering businesses in Bangladesh superior branding solutions that leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
}

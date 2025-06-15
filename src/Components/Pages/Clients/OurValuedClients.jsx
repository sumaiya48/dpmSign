import { useEffect, useRef } from "react";
import img1 from "/assets/brand1.png";
import img2 from "/assets/brand2.png";
import img3 from "/assets/brand3.png";
import img4 from "/assets/brand4.png";
import img5 from "/assets/brand5.png";
import img6 from "/assets/brand6.png";

const clientsData = [
  {
    title: "Corporate Clients",
    logos: [img1, img2, img3],
  },
  {
    title: "Educational Institutions",
    logos: [img4, img5, img6],
  },
  {
    title: "Government & NGOs",
    logos: [img1, img2, img3],
  },
];

export default function OurValuedClients() {
  const carouselRefs = useRef([]);

  useEffect(() => {
    clientsData.forEach((_, i) => {
      const container = carouselRefs.current[i];
      if (container && container.children.length > 0) {
        container.innerHTML += container.innerHTML; // Duplicate logos
      }

      const scrollStep = 0.7; // slower and smoother
      const scrollInterval = 20;

      const interval = setInterval(() => {
        if (container) {
          container.scrollLeft += scrollStep;

          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft -= container.scrollWidth / 2;
          }
        }
      }, scrollInterval);

      return () => clearInterval(interval);
    });
  }, []);

  return (
    <div className="py-16 px-4 md:px-12 bg-base-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Valued Clients</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base w-full md:w-7/12 mx-auto">
          We are honored to have worked with some of the most respected organizations and institutions in Bangladesh, including:
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-2 rounded"
          style={{ height: "6px" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clientsData.map((client, idx) => (
          <div key={idx} className="bg-[#E9F7FD] px-6 rounded-lg py-10 shadow-md">
            <h3 className="text-center font-bold text-lg text-[#1d9cd7] mb-4">
              {client.title}
            </h3>
            <div className="overflow-hidden relative">
              <div
                ref={(el) => (carouselRefs.current[idx] = el)}
                className="flex gap-4 sm:gap-6"
                style={{ whiteSpace: "nowrap", overflow: "hidden" }}
              >
                {client.logos.map((logo, index) => (
                  <div
                    key={index}
                    className="min-w-[100px] flex justify-center items-center"
                  >
                    <img
                      src={logo}
                      alt={`client-logo-${index}`}
                      className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

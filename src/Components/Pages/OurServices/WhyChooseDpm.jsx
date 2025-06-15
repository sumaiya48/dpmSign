import React from 'react';
import {
  FaCogs,
  FaClock,
  FaGem,
  FaUserShield,
  FaTools,
  FaMoneyBillWave
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCogs className="text-sky-500 text-2xl" />,
    title: "Fully Customizable Solutions",
    description: "Every product is tailored to your specifications - from size and material to design and finish."
  },
  {
    icon: <FaGem className="text-sky-500 text-2xl" />,
    title: "High-Quality Craftsmanship",
    description: "We use premium materials and state-of-the-art machinery to deliver products that exceed your expectations."
  },
  {
    icon: <FaTools className="text-sky-500 text-2xl" />,
    title: "Professional Installation",
    description: "Our team ensures signage is securely installed and positioned for optimal visibility and durability."
  },
  {
    icon: <FaClock className="text-sky-500 text-2xl" />,
    title: "On-Time Delivery",
    description: "We ensure your orders are delivered within the agreed timeframe without compromising quality."
  },
  {
    icon: <FaUserShield className="text-sky-500 text-2xl" />,
    title: "Trusted by Leading Organizations",
    description: "Our work speaks for itself, and we take pride in serving top corporates, educational institutions, and small businesses."
  },
  {
    icon: <FaMoneyBillWave className="text-sky-500 text-2xl" />,
    title: "Affordable Pricing",
    description: "We provide competitive pricing for customized products without compromising quality."
  }
];

export default function WhyChooseDpm() {
  return (
    <div className="w-11/12 mx-auto text-center py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Why Choose Dhaka Plastic & Metal
        </h2>
        <p className=" text-sm text-gray-600 font-semibold mt-2">
          At Dhaka Plastic & Metal, we combine technology, creativity, and passion to deliver exceptional results. Here's why our clients trust us.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left ">
        {services.map((service, idx) => (
          <div key={idx} className="flex gap-6 items-start bg-[#F9FBFD] p-7  border-blue-200 border-2 rounded-xl">
            <div className="bg-blue-100 p-3 rounded-full">
              {service.icon}
            </div>
            <div>
              <h4 className="font-bold text-md">{service.title}</h4>
              <p className="text-xs text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a href="#" className="btn bg-sky-500 hover:bg-sky-600 text-white">
          Get a Quote Now
        </a>
      </div>
    </div>
  );
}

import React from "react";
import Marquee from "react-fast-marquee";
import { FaLightbulb, FaTools, FaCogs, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeServices() {
  const services = [
    {
      title: "Corporate Branding Products",
      subtitle: "Elevate Your Brand Presence with Customized Accessories",
      desc: "We provide a wide range of corporate branding products to enhance your workspace aesthetics and event visibility.",
      icon: <FaBullhorn className="text-3xl text-blue-500" />,
      btnText: "Explore Branding Accessories",
      img: "/assets/services1.jpg",
    },
    {
      title: "Signage Installation",
      subtitle: "Seamless and Professional Installation Services",
      desc: "We ensure perfect signage installation. Our experienced team guarantees secure placement for indoor and outdoor signs.",
      icon: <FaTools className="text-3xl text-blue-500" />,
      btnText: "Schedule Your Installation",
      img: "/assets/services2.jpg",
    },
    {
      title: "3D Signage Solutions",
      subtitle: "Make your brand stand out!",
      desc: "Our premium 3D signage services help businesses create impactful brand visibility using modern techniques.",
      icon: <FaLightbulb className="text-3xl text-blue-500" />,
      btnText: "Get a Free Consultation",
      img: "/assets/services3.jpg",
    },
    {
      title: "Custom Design Support",
      subtitle: "Unique design assistance for your business",
      desc: "Our design team helps craft visuals that match your brand’s personality. Bring your vision to life!",
      icon: <FaCogs className="text-3xl text-blue-500" />,
      btnText: "Request Design Help",
      img: "/assets/services4.jpg",
    },
  ];

  return (
    <div className="py-10">
      <div className=" mb-8 w-9/12 mx-auto">
        <h2 className="text-3xl text-center sm:text-4xl font-bold">Our Services</h2>
        <p className="sm:text-lg text-gray-600 font-semibold mt-2 w-10/12 mx-auto">
          Explore the wide array of services we offer at Dhaka Plastic & Metal, tailored to meet your unique needs. From precision manufacturing to customized solutions, we are committed to delivering excellence every step of the way!
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <Marquee direction="right" pauseOnHover speed={50} gradient={false}>
        <div className="flex gap-10 px-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card w-96 bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition"
            >
              <figure>
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  {service.icon}
                  <h2 className="card-title text-lg">{service.title}</h2>
                </div>
                <p className="font-semibold">{service.subtitle}</p>
                <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
                <div className="mt-4">
                  <button className="btn btn-outline btn-sm w-full">
                    {service.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <div className="card-actions mt-12 flex justify-center">
                      <Link to='/services'>
                        <button className="btn btn-info  text-white">Read More</button>
                      </Link>
                    </div>
    </div>
  );
}

import { FaBuilding, FaStore, FaLandmark, FaTheaterMasks } from 'react-icons/fa';
import { PiGraduationCap } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";
const industries = [
   {
    title: "Corporate Sector",
    description: "Professional signage, recognition plaques, and branding products.",
    icon: <FaBuilding className="text-2xl text-[#45B6E7]" />
  },
  {
    title: "Educational Institutions",
    description: "Customized crests, honor boards, and signage.",
    icon: <PiGraduationCap className="text-2xl text-[#45B6E7]" />
  },
  {
    title: "Retail & Hospitality",
    description: "Eye-catching signage and promotional items to attract customers.",
    icon: <FaStore className="text-2xl text-[#45B6E7]" />
  },
  {
    title: "Government & NGOs",
    description: "Recognition products, plaques, and event branding solutions",
    icon: <FaLandmark className="text-2xl text-[#45B6E7]" />
  },
  {
    title: "Small Businesses",
    description: "Affordable branding solutions to elevate visibility and growth.",
    icon: <MdBusinessCenter className="text-2xl text-[#45B6E7]" />
  },
  {
    title: "Culture & Entertainment",
    description: "Customized signage, awards, and gifts for events and celebrations.",
    icon: <FaTheaterMasks className="text-2xl text-[#45B6E7]" />
  },
];

  

export default function IndustriesWeServe() {
  return (
    <div className="py-12 px-4 md:px-12 bg-base-100">
          {/* Heading */}
          <div className="text-center mb-10 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold">Industries We Serve
</h2>
            <p className="text-base w-8/12 mx-auto  text-gray-600 mt-2">
              At Dhaka Plastic & Metal, we cater to a diverse range of industries, providing high-quality signage, award plaques, and branding solutions. Our products are designed to elevate your brand, recognize achievements, and create lasting impressions.


            </p>
            <hr
              className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-2 rounded"
              style={{ height: "6px" }}
            />
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {industries.map((industry, idx) => (
              <div key={idx} className="card bg-[#F9FBFD]  shadow-lg px-6  py-10 space-y-4 border-2 border-blue-300 flex justify-center">
                <p className="flex text-xl font-bold items-center gap-2">
                    <span>{industry.icon}</span> {industry.title}</p>
                <p className="flex items-center text-xs gap-2">{industry.description}</p>
               
              </div>
            ))}
          </div>
        </div>
  )
}

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const locations = [
  {
    title: "Head Office",
    address: "Shop-94, Dhaka University Market, Katabon Road, Dhaka-1000.",
    phone: "+880 1958253962",
    email: "info@dpmsign.com",
    time: "Sunday–Friday: 10:00 AM – 10:00 PM",
  },
  {
    title: "Branch Office",
    address: "Shop-142, Dhaka University Market, Katabon Road, Dhaka-1000.",
    phone: "+880 1958253965",
    email: "info@dpmsign.com",
    time: "Sunday–Friday: 10:00 AM – 10:00 PM",
  },
  {
    title: "Workshop",
    address: "Vojjo Teiler Goli, Near Bata Signal More, Elephant Road, Dhaka-1205.",
    phone: "+880 1919960198",
    email: "",
    time: "Sunday–Friday: 10:00 AM – 10:00 PM",
  },
];

const OurLocations = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-base-100">
      {/* Heading */}
      <div className="text-center mb-10 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Locations</h2>
        <p className="text-base w-8/12 mx-auto sm:text-lg text-gray-600 mt-2">
          At Dhaka Plastic & Metal, we make communication easy. Whether you have questions about our products, need a quote for bulk orders, or want to discuss custom solutions, our team is just a call, click, or visit away.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-2 rounded"
          style={{ height: "6px" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <div key={idx} className="card bg-base-200 shadow-lg p-6 space-y-4 border-2 border-gray-300">
            <h3 className="text-xl font-semibold">{loc.title}</h3>
            <p className="flex items-start gap-2"><FaMapMarkerAlt className="text-[#45B6E7] mt-1" /> {loc.address}</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#45B6E7]" /> {loc.phone}</p>
            {loc.email && <p className="flex items-center gap-2"><FaEnvelope className="text-[#45B6E7]" /> {loc.email}</p>}
            <p className="flex items-center gap-2"><FaClock className="text-[#45B6E7]" /> {loc.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocations;

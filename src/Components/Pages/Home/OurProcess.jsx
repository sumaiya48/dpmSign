import {
  FaPaperPlane,
  FaComments,
  FaCreditCard,
  FaPaintBrush,
  FaCogs,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    title: "Send Order Request",
    icon: <FaPaperPlane className="text-white text-2xl" />,
    desc: "Share your requirements and place your order.",
  },
  {
    title: "Consultation",
    icon: <FaComments className="text-white text-2xl" />,
    desc: "Discuss ideas and finalize the details with our team.",
  },
  {
    title: "Make Initial Payment",
    icon: <FaCreditCard className="text-white text-2xl" />,
    desc: "Secure your order by making an advance payment (25–50%).",
  },
  {
    title: "Design & Approval",
    icon: <FaPaintBrush className="text-white text-2xl" />,
    desc: "Our experts create a digital mockup for your approval.",
  },
  {
    title: "Production",
    icon: <FaCogs className="text-white text-2xl" />,
    desc: "We craft your product with precision and quality materials.",
  },
  {
    title: "Installation & Delivery",
    icon: <FaTruck className="text-white text-2xl" />,
    desc: "Delivered or installed, ready to impress.",
  },
];

export default function OurProcess() {
  return (
    <div className="py-20 w-11/12 mx-auto bg-base-100">
      {/* Heading */}
      <div className="text-center mb-10 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-2">
          Turning Your Ideas into Reality—Simple, Seamless, and Stress-Free.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-2 rounded"
          style={{ height: "6px" }}
        />
      </div>

      {/* Steps Container */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between gap-10 md:gap-0">
        {/* Horizontal line for desktop */}
        <div className="hidden md:block absolute top-[30px] left-0 right-0 h-1 bg-[#45B6E7] z-0 mx-32"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center z-10 md:w-1/6 relative"
          >
            {/* Icon Circle */}
            <div className="w-14 h-14 rounded-full bg-[#45B6E7] flex items-center justify-center shadow-md shrink-0">
              {step.icon}
            </div>

            {/* Vertical line on mobile (left of icon) */}
            {index !== steps.length - 1 && (
              <div className="absolute left-7 top-[60px] h-[50px] w-[2px] bg-[#45B6E7] block md:hidden z-0"></div>
            )}

            {/* Text */}
            <div className="ml-4 md:ml-0 mt-1 md:mt-3">
              <h3 className="font-bold">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

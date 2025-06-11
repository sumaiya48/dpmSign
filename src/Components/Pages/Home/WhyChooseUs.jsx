import { FaShieldAlt, FaRocket, FaLightbulb } from "react-icons/fa";


export default function WhyChooseUs() {
  return (
    <div className="py-24 w-11/12 mx-auto bg-base-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our Satisfied Clients
        </h2>
        <p className=" sm:text-lg text-gray-600 font-semibold mt-2">
          At Dhaka Plastic & Metal, we combine technology, creativity, and passion to deliver exceptional <br /> results. Here's why our clients trust us.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10 justify-center items-center text-center mt-16">
        {/* Card 1 */}
        <div className="bg-[#F9FBFD] h-96 rounded-xl p-6 shadow-xl border-t-4 border-[#45B6E7] pt-32">
          <h3 className="text-2xl font-bold mb-3">Product Quality & Standard</h3>
          
          <p className="text-xl ">
            We are committed to providing our customers with high-quality products that meet or exceed the relevant industry standards
          </p>
        </div>

        {/* Card 2 */}
         <div className="bg-[#F9FBFD] h-96 rounded-xl p-6 shadow-xl border-t-4 border-[#45B6E7] pt-32">
          <h3 className="text-3xl font-bold mb-3">Guarantee and Warranty</h3>
          
          <p className="text-xl">
            We stand behind our products and services and offer our customers a guarantee and warranty for them.
          </p>
        </div>

        {/* Card 3 */}
         <div className="bg-[#F9FBFD] h-96 rounded-xl p-6 shadow-xl border-t-4 border-[#45B6E7] pt-32">
          <h3 className="text-3xl font-bold mb-3">Customization</h3>
          
          <p className=" text-xl ">
           We offer a wide range of customization as per our customer requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
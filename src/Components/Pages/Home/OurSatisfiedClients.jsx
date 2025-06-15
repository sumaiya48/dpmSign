import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function OurSatisfiedClients() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://test.api.dpmsign.com/api/product")
      .then((res) => {
        const allProducts = res.data.data.products;

        const allReviews = allProducts.flatMap((product) =>
          (product.reviews || [])
            .filter((review) => review.status === "published")
            .map((review) => ({
              description: review.description,
              rating: review.rating,
              customerName: review.customer?.name || "Anonymous",
              productName: product.name,
            }))
        );

        setReviews(allReviews);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-8 w-9/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Satisfied Clients</h2>
        <p className="sm:text-lg w-10/12 mx-auto text-gray-600 font-semibold mt-2">
         At Dhaka Plastic & Metal, we value the environment. We aim to minimize waste during production and offer eco-friendly materials whenever possible, ensuring a sustainable future for all.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>

      {/* Carousel */}
      <Marquee direction="right" gradient={false} speed={40} pauseOnHover className="space-x-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-md rounded-md p-6 w-[350px] lg:w-[600px] mx-4"
          >
            <FaQuoteLeft className="text-3xl text-[#45B6E7] mb-2" />
            <p className="text-gray-700 font-semibold mb-3">{review.description}</p>
            <div className="flex items-center gap-1 text-yellow-500 mb-1">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="text-sm text-gray-500 font-medium">
              <span className="font-bold text-black">{review.customerName}</span> on{" "}
              <span className="italic">{review.productName}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

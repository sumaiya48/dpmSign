import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BestSellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://test.api.dpmsign.com/api/product")
      .then((res) => {
        setProducts(res.data.data.products || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-10 lg:py-20 ">
      <div className=" mb-8 w-9/12 mx-auto text-center">
        <h2 className="text-3xl  sm:text-4xl font-bold">Our Best Selling Products</h2>
        <p className="sm:text-lg text-gray-600 font-semibold mt-2 w-10/12 mx-auto">
          Check out our most popular products!
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 lg:px-28">
        {products.map((product) => (
          <div
            key={product.productId}
            className="card bg-white shadow-xl rounded-xl border hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={product?.images?.imageName}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {product.name}
              </h2>
              <p className="text-gray-700 font-medium">
                Price: <span className="text-[#45B6E7]">{product.basePrice} Tk</span>
              </p>
              <div className="card-actions mt-4">
                <Link to={`/products/${product.productId}`}>
                  <button className="btn btn-info btn-sm text-white">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-actions mt-12 flex justify-center">
                <Link to='/ourproducts'>
                  <button className="btn btn-info  text-white">See More</button>
                </Link>
              </div>
    </div>
  );
}

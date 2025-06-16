import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BadgeCheck, Truck, RefreshCcw } from "lucide-react";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://test.api.dpmsign.com/api/product/${productId}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const imageUrl = product?.product?.images?.[0]?.imageName || "";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side: Image & Attributes */}
      <div>
        <div className="bg-white rounded-xl w-[500px] h-[500px] shadow-lg p-5">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product?.product?.name}
              className="rounded-xl w-full h-full object-cover"
            />
          ) : (
            <div className="text-center text-gray-400 h-full flex items-center justify-center border rounded-xl">
              No Image Available
            </div>
          )}
        </div>

        {/* Attributes */}
        {product?.product?.attributes?.length > 0 && (
          <div className="mt-6 space-y-3 bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Product Specifications
            </h2>
            <ul className="space-y-2">
              {product.product.attributes.map((attr) => (
                <li key={attr.attributeId}>
                  <span className="font-medium text-gray-700">
                    {attr.property}:
                  </span>{" "}
                  <span className="text-gray-600">{attr.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Side: Details */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-gray-800">{product?.product?.name}</h1>
        <p className="text-lg text-gray-500">SKU: {product?.product?.sku}</p>
        <p className="text-xl font-semibold text-[#45B6E7]">{product?.product?.basePrice} ৳</p>

        {/* Quantity Control */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity:</span>
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            −
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        {/* Tags */}
        {product.product?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.product.tags.map((tagObj) => (
              <span
                key={tagObj.tagId}
                className="bg-[#E1F4FB] text-[#0094C6] px-3 py-1 rounded-full text-sm font-medium"
              >
                {tagObj.tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Description</h3>
          <p className="text-gray-600 leading-relaxed">{product.product.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-2 text-gray-700">
            <BadgeCheck className="text-green-500" size={18} />
            <span>100% Original Product</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Truck className="text-blue-500" size={18} />
            <span>Express Shipping Available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <RefreshCcw className="text-orange-500" size={18} />
            <span>Easy return within 3 days</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-[#0094C6] hover:bg-[#0077a4] text-white px-6 py-2 rounded shadow w-full sm:w-auto">
            Send Order Request
          </button>
          <button className="bg-gray-800 hover:bg-black text-white px-6 py-2 rounded shadow w-full sm:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

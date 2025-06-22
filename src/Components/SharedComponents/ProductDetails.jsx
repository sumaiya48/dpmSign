import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BadgeCheck, Truck, RefreshCcw } from "lucide-react";
import CustomersReview from "./CustomersReview";
import { useCart } from "../Context/CartContext";
import Swal from "sweetalert2";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { cartItems, dispatch } = useCart();

  const cartProduct = cartItems.find((item) => item.productId === productId);

  useEffect(() => {
    axios
      .get(`https://test.api.dpmsign.com/api/product/${productId}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const imageUrl = product?.product?.images?.[0]?.imageName
    ? `https://test.api.dpmsign.com/uploads/product/${product.product.images[0].imageName}`
    : "";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
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

        {product?.product?.attributes?.length > 0 && (
          <div className="mt-6 bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Key Attributes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border border-gray-200">
                <thead className="bg-[#45B6E7] text-white">
                  <tr>
                    <th className="p-2 border border-gray-200">Property</th>
                    <th className="p-2 border border-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {product.product.attributes.map((attr) => (
                    <tr key={attr.attributeId} className="odd:bg-white even:bg-gray-50">
                      <td className="p-2 border border-gray-200 font-medium text-gray-800">
                        {attr.property}
                      </td>
                      <td className="p-2 border border-gray-200 text-gray-700">
                        {attr.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-gray-800">
          {product?.product?.name}
        </h1>
        <p className="text-lg text-gray-500">SKU: {product?.product?.sku}</p>
        <p className="text-xl font-semibold text-[#45B6E7]">
          {product?.product?.basePrice} ৳
        </p>

        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity:</span>

          <button
            onClick={() => {
              if (cartProduct) {
                dispatch({ type: "DECREASE_QUANTITY", payload: productId });
              } else {
                setQuantity((q) => Math.max(1, q - 1));
              }
            }}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            −
          </button>

          <span className="px-3">
            {cartProduct ? cartProduct.quantity : quantity}
          </span>

          <button
            onClick={() => {
              if (cartProduct) {
                dispatch({ type: "INCREASE_QUANTITY", payload: productId });
              } else {
                setQuantity((q) => q + 1);
              }
            }}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            +
          </button>
        </div>

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

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {product.product.description}
          </p>
        </div>

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

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-[#0094C6] hover:bg-[#0077a4] text-white px-6 py-2 rounded shadow w-full sm:w-auto">
            Send Order Request
          </button>

          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  ...product.product,
                  quantity,
                  image: imageUrl,
                },
              });
              setQuantity(1);
              Swal.fire({
                icon: "success",
                title: "Added to Cart",
                text: `${product.product.name} (x${quantity}) added to your cart.`,
                timer: 1500,
                showConfirmButton: false,
              });
            }}
            className="btn bg-gray-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <CustomersReview />
    </div>
  );
}

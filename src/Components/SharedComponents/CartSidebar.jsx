import React from "react";
import { FiX, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Swal from "sweetalert2";

export default function CartSidebar({ onClose }) {
  const { cartItems, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.basePrice * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-96 max-w-full h-full bg-white z-50 shadow-xl p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">🛒 Your Cart</h3>
        <button onClick={onClose} className="text-2xl text-gray-600 hover:text-red-500">
          <FiX />
        </button>
      </div>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.productId} className="flex items-center border p-3 rounded-md shadow-sm gap-4">
              <img
                src={item.image || "/assets/default-product.png"}
                alt={item.name}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="flex-1">
                <h4
                  className="font-bold text-sm cursor-pointer"
                  onClick={() => {
                    navigate(`/products/${item.productId}`);
                    onClose();
                  }}
                >
                  {item.name}
                </h4>
                <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.productId })} className="px-2 py-1 bg-gray-200 rounded">−</button>
                  {item.quantity}
                  <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.productId })} className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
              <FiTrash2
                className="text-red-500 cursor-pointer"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.productId });
                  Swal.fire({
                    icon: "warning",
                    title: "Removed",
                    text: `${item.name} removed from your cart.`,
                    timer: 1500,
                    showConfirmButton: false,
                  });
                }}
              />
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <h4 className="font-bold text-lg text-right">Total: ৳ {total}</h4>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Send Order Request
            </button>
            <button
              onClick={() => {
                dispatch({ type: "CLEAR_CART" });
                Swal.fire({
                  icon: "info",
                  title: "Cart Cleared",
                  text: `Your cart is now empty.`,
                  timer: 1500,
                  showConfirmButton: false,
                });
              }}
              className="mt-2 w-full bg-red-100 text-red-500 py-2 rounded hover:bg-red-200"
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">🛒 Please visit <Link className="text-blue-700 underline" to='/ourproducts'>Our Products </Link> to add product in your cart.</p>
      )}
    </div>
  );
}

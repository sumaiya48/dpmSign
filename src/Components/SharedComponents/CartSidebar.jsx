import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function CartSidebar({ onClose }) {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.basePrice * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-96 max-w-full h-full bg-white z-50 shadow-xl p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">🛒 Your Cart</h3>
        <button onClick={onClose} className="text-2xl text-gray-600 hover:text-red-500">
          <FiX />
        </button>
      </div>

      {cart.length > 0 ? (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.productId}
                onClick={() => {
                  navigate(`/products/${item.productId}`);
                  onClose();
                }}
                className="flex items-center border p-3 rounded-md shadow-sm gap-4 cursor-pointer"
              >
                <img
                  src={
                    item.images?.[0]?.imageName
                      ? `https://test.api.dpmsign.com/uploads/product/${item.images[0].imageName}`
                      : "/assets/default-product.png"
                  }
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">৳ {item.basePrice}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mt-4">
            <h4 className="font-bold text-lg text-right">Total: ৳ {total}</h4>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Send Order Request
            </button>
            <button
              className="mt-2 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-400 mt-10">🛒 Please add product.</p>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function ProductsPage() {

    const navigate = useNavigate();
    
const { dispatch } = useCart();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [openSub, setOpenSub] = useState({});

  // Fetch Categories
  useEffect(() => {
    axios.get("https://test.api.dpmsign.com/api/product-category")
      .then(res => {
        setCategories(res.data?.data?.categories || []);
      })
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  // Fetch Products
  useEffect(() => {
    axios.get("https://test.api.dpmsign.com/api/product")
      .then(res => {
        setProducts(res.data?.data?.products || []);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Combine category + product
  const getDisplayedProducts = () => {
    if (!selectedCategory) return products;

    let selectedCatObj = categories.find(
      cat =>
        cat.categoryId === selectedCategory ||
        cat.subCategories?.some(sub => sub.categoryId === selectedCategory)
    );

    if (!selectedCatObj) {
      categories.forEach(cat => {
        const foundSub = cat.subCategories?.find(
          sub => sub.categoryId === selectedCategory
        );
        if (foundSub) selectedCatObj = foundSub;
      });
    }

    const productIds = selectedCatObj?.products?.map(p => p.productId) || [];
    return products.filter(prod => productIds.includes(prod.productId));
  };

  const displayedProducts = getDisplayedProducts().sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "priceLow") return parseFloat(a.basePrice) - parseFloat(b.basePrice);
    if (sortOption === "priceHigh") return parseFloat(b.basePrice) - parseFloat(a.basePrice);
    if (sortOption === "recent") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOption === "old") return new Date(a.createdAt) - new Date(b.createdAt);
    return 0;
  });

  return (
    <div className="w-11/12 mx-auto py-10 flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full">
        <h2 className="font-bold text-xl mb-5 border-b pb-2 text-gray-700">
          📂 All Categories
        </h2>
        <div
          onClick={() => setSelectedCategory(null)}
          className={`cursor-pointer px-3 py-2 rounded-md transition mb-2
          hover:bg-blue-100 text-gray-700 font-medium 
          ${selectedCategory === null ? "bg-blue-200 font-bold text-blue-800" : ""}`}
        >
          🟢 Show All Products
        </div>

        <ul className="space-y-2">
          {categories.map(cat => {
            const hasSub = cat.subCategories && cat.subCategories.length > 0;
            const isOpen = openSub[cat.categoryId];

            return (
              <li key={cat.categoryId}>
                <div className="flex items-center justify-between">
  <button
    onClick={() => {
      setSelectedCategory(cat.categoryId);
      if (hasSub) {
        setOpenSub(prev => ({
          ...prev,
          [cat.categoryId]: !prev[cat.categoryId],
        }));
      }
    }}
    className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition
    hover:bg-blue-100 text-gray-700 font-medium
    ${selectedCategory === cat.categoryId ? "bg-blue-200 font-bold text-blue-800" : ""}`}
  >
    <span className="flex items-center gap-1">
      {hasSub } {cat.name}
    </span>
    {hasSub && (
      <span className="text-sm">
        {openSub[cat.categoryId] ? <FaAngleDown /> : <FaAngleRight />}
      </span>
    )}
  </button>
</div>


                {/* Sub Categories */}
                {hasSub && isOpen && (
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    {cat.subCategories.map(sub => (
                      <li
                        key={sub.categoryId}
                        onClick={() => setSelectedCategory(sub.categoryId)}
                        className={`cursor-pointer px-2 py-1 rounded hover:bg-blue-50 transition
                        ${selectedCategory === sub.categoryId ? "bg-blue-100 text-blue-700 font-semibold" : ""}`}
                      >
                        - {sub.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Products */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl text-gray-700">🛍️ Products</h2>
          <select
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className="border px-3 py-2 rounded text-gray-600"
          >
            <option value="default">Sort by Default</option>
            <option value="name">Name (A-Z)</option>
            <option value="priceLow">Price (Low to High)</option>
            <option value="priceHigh">Price (High to Low)</option>
            <option value="recent">Recently Added</option>
            <option value="old">Oldest First</option>
          </select>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <div
                key={product.productId}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition bg-white"
              >
                <img
                  src={
                    product.images && product.images.length > 0
                      ? `https://test.api.dpmsign.com/uploads/product/${product.images[0].imageName}`
                      : "https://via.placeholder.com/250"
                  }
                  alt={product.name}
                  className="w-full h-56 object-contain mb-3 rounded-md"
                />
                <h3 className="font-semibold text-base text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg mb-1">
                  ৳ {product.basePrice}
                </p>
                <p className="text-xs text-gray-500 mb-3">SKU: {product.sku}</p>
                <div className="flex gap-1">
                  <button onClick={() => {
                        navigate(`/products/${product.productId}`);
                      }} className="flex-1 btn btn-info text-white py-3 rounded hover:bg-blue-700 text-sm">
                    View Details
                  </button>
      
<button
  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
  className="btn bg-gray-200"
>
  Add to Cart
</button>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20 text-lg">
            No products found 🧐
          </p>
        )}
      </div>
    </div>
  );
}

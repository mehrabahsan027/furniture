import React from "react";
import Rating from "./Rating";
import { FaCartPlus } from "react-icons/fa";

function ProductsCard({ products }) {
  // Fallback image for broken URLs
  const fallbackImage = "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg";

  return (
    <div className="group w-full max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-[28rem] sm:h-[30rem] md:h-[32rem]">
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-60 md:h-64 flex-shrink-0">
        <img
          src={products.image || fallbackImage}
          alt={products.name}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = fallbackImage)}
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold text-gray-900 px-2 py-1 rounded-full">
          {products.rating} ★
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h4 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
          {products.category}
        </h4>
        <h3 className="text-base sm:text-lg font-semibold font-montserrat text-gray-900 dark:text-yellow-50 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
          {products.name}
        </h3>
        <div className="mt-2">
          <Rating rating={products.rating} />
        </div>
        <div className="mt-auto flex justify-between items-center">
          <p className="font-poppins font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
            <sup className="text-sm">$</sup>
            {products.price.toFixed(2)}
          </p>
          <button
            className="flex items-center gap-2 bg-cyan-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-md hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500"
            aria-label={`Add ${products.name} to cart`}
          >
            <FaCartPlus className="text-base sm:text-lg" />
            <span className="text-xs sm:text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
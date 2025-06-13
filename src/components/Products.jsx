import React, { useState } from "react";
import { products } from "../utils/products";
import ProductsCard from "./ProductsCard";
import { FaArrowRightLong } from "react-icons/fa6";

function Products({ headline }) {
  const categories = ["Living Room", "Bedroom", "Dining Room", "Home Office"];
  const [selectedCategory, setSelectedCategory] = useState("Dining Room");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProduct = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadmoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="mt-8">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <h2 className="capitalize dark:text-yellow-50 text-3xl lg:text-4xl text-center font-montserrat font-semibold">
          {headline}
        </h2>

        {/* Category Tab */}
        <div className="bg-gray-100 dark:bg-slate-700 max-w-4xl mx-auto px-4 sm:px-6 py-3 rounded-lg mt-4 sm:mt-6 shadow-sm">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(item);
                  setVisibleProducts(4);
                }}
                className={`px-3 sm:px-5 py-2 text-sm sm:text-base font-poppins font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  selectedCategory === item
                    ? "bg-cyan-600 text-white dark:bg-red-600 dark:text-yellow-50 shadow-md"
                    : "bg-white text-gray-700 dark:bg-slate-600 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-red-500 hover:text-cyan-800 dark:hover:text-yellow-50"
                }`}
                aria-label={`Filter by ${item} category`}
                aria-pressed={selectedCategory === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto bg-gray-50 py-8 px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 justify-items-center gap-10 mt-10">
          {filteredProduct.slice(0, visibleProducts).map((item) => (
            <ProductsCard key={item.id} products={item} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProduct.length && (
          <div className="py-5 flex justify-center">
            <button
              onClick={loadmoreProducts}
              className="px-4 py-3 text-lg hover:bg-white hover:text-black font-medium hover:border hover:border-red-900 duration-300 text-white flex justify-center items-center gap-x-3 bg-red-900"
            >
              <span>Show More</span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
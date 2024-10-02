import React, { useState } from "react";
import { products } from "../utils/products";
import ProductsCard from "./ProductsCard";
import { FaArrowRightLong } from "react-icons/fa6";

function Products({ headline }) {
  const categories = ["One", "Two", "Three", "Four"];
  const [selectedCategory, setSelectedCategory] = useState("One");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProduct = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadmoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="mt-8">
      <div className="mx-auto container">
        <h2 className="capitalize dark:text-yellow-50 text-3xl lg:text-4xl text-center font-montserrat font-semibold">
          {headline}
        </h2>

        {/* category Tab */}
        <div className="bg-red-900  max-w-fit lg:w-1/2 mx-auto px-5 py-3 rounded-md mt-2 ">
          <div className="text-center space-x-2 sm:space-x-5 ">
            {categories.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setSelectedCategory(item);
                    setVisibleProducts(4);
                  }}
                  key={index}
                  className={`px-4 py-2 font-poppins  text-lg  rounded-full hover:bg-red-900 hover:text-yellow-50 hover:border transition-colors duration-300 ${
                    selectedCategory === item
                      ? "bg-red-900 text-yellow-50 font-bold border"
                      : "bg-white text-black"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}

        <div className="container mx-auto bg-gray-50 py-8 px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  justify-items-center gap-10 mt-10">
          {filteredProduct.slice(0, visibleProducts).map((item) => {
            return <ProductsCard key={item.id} products={item} />;
          })}
        </div>

        {/* load more btn */}

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

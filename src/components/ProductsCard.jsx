import React from "react";
import Rating from "./Rating";
import { FaCirclePlus } from "react-icons/fa6";

function ProductsCard({ products }) {
  return (
    <div className="w-full">
      {/* image */}
      <div className="w-56 h-72 mx-auto ">
        <img
          src={products.image}
          alt={products.title}
          className="w-full h-full"
        />
      </div>

      {/* info */}
      <div className="bg-white dark:bg-slate-800 shadow-sm p-6">
        <h4 className="text-base mb-1 dark:text-yellow-50 text-gray-500">{products.category}</h4>
        <h3 className="text-lg dark:text-yellow-50 font-semibold font-montserrat pb-2">
          {products.name}
        </h3>
        <Rating rating={products.rating} />
        <div className="mt-3 flex justify-between items-center">
          <p className="font-poppins font-semibold text-lg text-black dark:text-white">
            <sup>$</sup> <span className="text-xl">{products.price}</span>
          </p>
          <button className="text-cyan-950  hover:text-cyan-900 dark:text-red-900 text-3xl">
            <FaCirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;

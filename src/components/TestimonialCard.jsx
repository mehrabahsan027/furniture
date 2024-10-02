import React from "react";

function TestimonialCard({ item }) {
  return (
    <div className=" bg-white shadow-lg rounded-lg border mx-4  my-6 lg:mx-auto">
      <div className="flex items-center justify-center  px-6 py-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={item.image}
          alt={item.name}
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800 font-montserrat">{item.name}</h2>
        </div>
      </div>
      <div className="px-6 text-center py-4">
        <p className="text-stone-700 text-base font-poppins">{item.desc}</p>
      </div>
      <div className="px-6 text-center py-4">
        <span className="inline-block font-poppins bg-red-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
          {item.star} stars
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;

import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function Rating({ rating }) {
  const totalStars = 5;
  return (
    <div className="flex space-x-1"> 
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <FaStar key={index} className="text-yellow-600" />
        ) : (
          <FaRegStar key={index} className="text-gray-400" />
        );
      })}
    </div>
  );
}

export default Rating;

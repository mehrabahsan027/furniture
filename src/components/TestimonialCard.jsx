import React from "react";

function TestimonialCard({ item }) {
  // Fallback image for broken URLs
  const fallbackImage = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg";

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-gray-200 dark:border-slate-600 mx-2 my-6 lg:mx-4 flex flex-col h-[18rem] sm:h-[20rem] transition-transform duration-300 hover:shadow-xl">
      {/* Header Section */}
      <div className="flex items-center justify-center px-4 sm:px-6 py-4">
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-cyan-600 dark:border-red-600"
          src={item.image || fallbackImage}
          alt={item.name}
          onError={(e) => (e.target.src = fallbackImage)}
          loading="lazy"
          aria-label={`Profile picture of ${item.name}`}
        />
        <div className="ml-4">
          <h2 className="text-lg sm:text-xl font-semibold font-montserrat text-gray-900 dark:text-yellow-50">
            {item.name}
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-4 sm:px-6 py-2 flex-grow">
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-poppins line-clamp-4 text-center">
          {item.desc}
        </p>
      </div>

      {/* Rating Section */}
      <div className="px-4 sm:px-6 py-4 text-center">
        <span
          className="inline-flex items-center gap-1 bg-cyan-600 dark:bg-red-600 text-white rounded-full px-3 py-1 text-xs sm:text-sm font-poppins font-semibold"
          aria-label={`Rated ${item.star} stars`}
        >
          {item.star} <span className="text-yellow-400">★</span>
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;
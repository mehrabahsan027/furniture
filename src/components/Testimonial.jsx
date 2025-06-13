import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../utils/testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="container mx-auto mt-10 md:mt-16 px-4 sm:px-6 lg:px-8">
      {/* Headings */}
      <div className="text-center">
        <h2 className="uppercase text-red-900 dark:text-red-600 text-lg sm:text-xl font-montserrat font-semibold tracking-wide">
          Testimonials
        </h2>
        <h4 className="capitalize text-gray-900 dark:text-yellow-50 text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold mt-2 mb-6 sm:mb-8">
          Customer Insights
        </h4>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper relative"
        aria-label="Testimonial carousel"
      >
        <div className="swiper-wrapper">
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev hidden lg:block absolute top-1/2 -left-12 transform -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-red-600 cursor-pointer">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-red-600 cursor-pointer">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
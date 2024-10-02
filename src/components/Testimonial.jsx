import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../utils/testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import 'swiper/css/navigation';

import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className="container mx-auto mt-10 md:mt-16 ">
      {/* headings */}
      <div>
        <h2 className="uppercase text-center lg:py-5 text-lg text-red-900 font-montserrat font-semibold">
          Testimonials
        </h2>
        <h4 className="capitalize dark:text-yellow-50 mb-2 text-xl lg:text-3xl text-center font-montserrat font-semibold">
          Customer Insights
        </h4>
      </div>

      {/* card */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {reviews.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;

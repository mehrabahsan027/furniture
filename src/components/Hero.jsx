import React from "react";
import banner from "../assets/banner.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="h-screen brightness-90 bg-center bg-cover relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="h-screen  flex flex-col gap-y-8 justify-center items-center text-center">
        {/* Tag line */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 ,transition:{delay:1,duration:1}}}
          className="text-3xl px-6  font-bold lg:text-6xl text-yellow-50  lg:w-9/12 leading-snug lg:leading-tight"
        >
          Quality Craftsmanship, Timeless Appeal.
        </motion.h1>

        {/* search Field */}
        <div className="relative z-40">
          <input
            type="search"
            placeholder="Search"
            className="w-full sm:w-80 px-6 py-2 rounded-2xl   border outline-none bg-white/25 text-white"
          />

          <div className="absolute cursor-pointer bg-red-900 text-white p-2 top-1 right-3 rounded-full">
            <IoSearchOutline className="text-lg font-bold" />
          </div>
        </div>
      </div>

      {/* bottom blur effect */}

      <div
        className="absolute bottom-0  h-2/4  inset-x-0 -mb-2 bg-gradient-to-t from-yellow-50 via-transparent to-transparent blur-sm
      
      "
      />
    </section>
  );
}

export default Hero;

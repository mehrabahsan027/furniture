import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


function Materials() {
  return (
    <section className="container mx-auto -mt-16 md:mt-24 flex flex-col md:flex-row justify-center  gap-x-8">
      <div className="md:w-1/2 flex-col px-4 space-y-1 md:space-y-5">
        <h3 className="uppercase lg:py-5 text-lg text-red-800 font-montserrat font-semibold">
          Materials
        </h3>
        <h4 className="capitalize text-2xl dark:text-yellow-50 font-montserrat font-semibold">
          Industry-leading materials for high-end furniture.
        </h4>
        <p className="text-lg font-poppins text-stone-800 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Asperiores, sint. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti rerum
        </p>

        <div className="py-5 flex justify-center md:justify-start ">
          <button className="px-4 py-3 text-lg hover:bg-white hover:text-black font-medium hover:border hover:border-red-900 duration-300 text-white flex justify-center items-center gap-x-3 bg-red-900">
            <span className="font-poppins font-medium">More Info</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>

      {/* image section */}
      <div className="md:w-1/2 grid px-4 grid-cols-2 md:grid-cols-3 gap-10 items-center">
        <div className="space-y-5">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg"
            className="object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2023/10/30/10/08/sofa-8352443_1280.jpg"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg"
            className=" md:h-[540px] object-cover w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Materials;

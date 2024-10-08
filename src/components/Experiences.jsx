import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {  motion } from "framer-motion";

function Experiences() {
  const ExpVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      
     
      
      transition: {
      
        // when:'beforeChildren',
        staggerChildren: 0.3, // Adjust the time to stagger between children
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,transition:{duration:0.5} },
  };
  return (
    <section className="container mx-auto  my-24 flex flex-col md:flex-row justify-center  gap-x-8">
      <div className="md:w-1/2 h-auto">
        <img
          className="w-full h-full object-cover px-3"
          src="https://cdn.pixabay.com/photo/2023/12/31/15/42/living-room-8480223_1280.jpg"
        />
      </div>

      <motion.div 
       initial="hidden"
       whileInView="visible"
       variants={ExpVariants}
      
      className="md:w-1/2 flex-col px-4 space-y-1 md:space-y-5">
        <motion.h3
         variants={itemVariants}
        
         className="uppercase py-5 text-lg text-red-800 font-montserrat font-semibold">
          Experiences
        </motion.h3>
        <motion.h4 
         variants={itemVariants}
        className="capitalize dark:text-yellow-50 text-2xl font-montserrat font-semibold">We strive to provide a remarkable experience.</motion.h4>
        <motion.p
         variants={itemVariants}
         className="text-lg font-poppins text-stone-800 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum dolores ducimus aspernatur reprehenderit cumque maxime, voluptas porro qui a?
        </motion.p>

        <motion.div
         variants={itemVariants}
         className="py-5 flex justify-center md:justify-start">
            <button
             
              className="px-4 py-3 text-lg hover:bg-white hover:text-black font-medium hover:border hover:border-red-900 duration-300 text-white flex justify-center items-center gap-x-3 bg-red-900"
            >
              <span className="font-poppins font-medium">More Info</span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </motion.div>


      </motion.div>
    </section>
  );
}

export default Experiences;

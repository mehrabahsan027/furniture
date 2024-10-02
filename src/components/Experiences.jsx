import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Experiences() {
  return (
    <section className="container mx-auto  my-24 flex flex-col md:flex-row justify-center  gap-x-8">
      <div className="md:w-1/2 h-auto">
        <img
          className="w-full h-full object-cover px-3"
          src="https://cdn.pixabay.com/photo/2023/12/31/15/42/living-room-8480223_1280.jpg"
        />
      </div>

      <div className="md:w-1/2 flex-col px-4 space-y-1 md:space-y-5">
        <h3
        
         className="uppercase py-5 text-lg text-red-800 font-montserrat font-semibold">
          Experiences
        </h3>
        <h4 className="capitalize dark:text-yellow-50 text-2xl font-montserrat font-semibold">We strive to provide a remarkable experience.</h4>
        <p className="text-lg font-poppins text-stone-800 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum dolores ducimus aspernatur reprehenderit cumque maxime, voluptas porro qui a?
        </p>

        <div className="py-5 flex justify-center md:justify-start">
            <button
             
              className="px-4 py-3 text-lg hover:bg-white hover:text-black font-medium hover:border hover:border-red-900 duration-300 text-white flex justify-center items-center gap-x-3 bg-red-900"
            >
              <span className="font-poppins font-medium">More Info</span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>


      </div>
    </section>
  );
}

export default Experiences;

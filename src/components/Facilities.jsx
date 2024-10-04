import React from "react";
import FacilitiesItems from "./FacilitiesItems";
import { motion } from "framer-motion";
import App from './../App';

function Facilities() {
  return (
    <section className="container  dark:py-5  mx-auto mt-16">
      <motion.h2
      initial={{opacity:0,scale:0.5}}
      whileInView={{opacity:1,scale:1,transition:{
        duration:1,delay:0.3
      }}}
      viewport={{once:true}}
       
        className="text-center dark:text-yellow-50 font-montserrat text-3xl  md:text-4xl capitalize font-bold"
      >
        Ready to experience the best?
      </motion.h2>
      <motion.div 
      initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0,transition:{type:'spring',delay:0.3}}}
      viewport={{once:true}}
      
      className="grid grid-cols-1 lg:px-5 lg:grid-cols-3 items-center justify-center py-8 lg:py-16 gap-10">
        <FacilitiesItems />
      </motion.div>
    </section>
  );
}

export default Facilities;

import React from "react";
import FacilitiesItems from "./FacilitiesItems";

function Facilities() {
  return (
    <section className="container  dark:py-5  mx-auto mt-16">
      <h2 className="text-center dark:text-yellow-50 font-montserrat text-3xl  md:text-4xl capitalize font-bold">
        Ready to experience the best?
      </h2>
      <div className="grid grid-cols-1 lg:px-5 lg:grid-cols-3 items-center justify-center py-8 lg:py-16 gap-10">

        <FacilitiesItems/>

      


     
      </div>
    </section>
  );
}

export default Facilities;

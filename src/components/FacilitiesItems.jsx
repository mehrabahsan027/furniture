import React from "react";

function FacilitiesItems() {
  const data = [
    {
      title: "Premium Features",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",

    },
    {
      title: "Budget-Friendly",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",

    },
    {
      title: "Plenty Of Choices",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",

    },

  ];

  return (
    <>

    {data.map((item,index)=>{
        return  <div key={index}  className=" flex flex-col px-4  md:px-0    font-poppins gap-y-4">
        <h3 className="text-2xl dark:text-yellow-50 font-montserrat font-medium text-center">
          {item.title}
        </h3>
        <p className="text-center dark:text-white lg:text-left font-poppins">
        {item.desc}
        </p>
        <button className="bg-red-600 font-montserrat font-semibold text-white rounded-xl w-fit mx-auto px-5 py-2 hover:bg-red-700 duration-300">More Info</button>
      </div>
    })}


   
    </>
  );
}

export default FacilitiesItems;

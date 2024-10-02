import React from "react";
import banner from "../assets/banner.jpg";
import Products from "../components/Products";

function Shop() {
  return (
    <section className="min-h-screen">
      <div
        className="w-full h-[400px] brightness-60 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1
          style={{ textShadow: "-2px -2px 2px rgba(255,255,255,1)" }}
          className="text-4xl text-black  font-bold font-montserrat"
        >
          Our Offerings
        </h1>
      </div>

      <Products headline="What do you prefer?" />
    </section>
  );
}

export default Shop;

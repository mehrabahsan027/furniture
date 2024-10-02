import React from "react";
import Experiences from "../components/Experiences";
import Materials from "../components/Materials";
import banner from "../assets/about-banner.jpg";

function About() {
  return (
    <>
      <div className="h-[400px] brightness-50  bg-top" style={{ backgroundImage: `url(${banner})` }}></div>
      <Experiences />
      <Materials />
    </>
  );
}

export default About;

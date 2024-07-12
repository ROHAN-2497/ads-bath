import React from "react";
import Card from "../card";

const DigitalDomin = () => {
  return (
    <div className="container mt-20">
      <div className="text-white text-center  ">
        <h2 className="text-5xl px-64 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-white to-pink-500 font-medium">
          Behind the Scenes: Our Process for Digital Dominance
        </h2>
        <p className="py-8 px-28">
          At [Agency Name], we specialize in meticulous digital marketing. By
          understanding your goals and exploring your brand and audience, we
          create tailored strategies integrating SEO, PPC, and cutting-edge
          techniques. Our transparent communication and measurable results
          ensure every step aligns with your vision. Choose [Agency Name] for a
          strategic partnership driving impactful growth.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default DigitalDomin;

import { useState, useEffect } from "preact/hooks";
import React from "react";
import { Icon } from "../Icons";

const images = [
  "/images/Image1.png",
  "/images/Image2.png",
  "/images/Image3.png",
];
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current image index, looping back to the first image if needed
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change images every 3 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="relative -mt-10 w-full h-screen">
      <div className="absolute z-0 w-full h-full top-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="image"
            className={`w-full object-cover h-full ${currentImage === index ? "block" : "hidden"}`}
          />
        ))}
      </div>
      <div className="z-10 relative text-white px-4 md:px-10 lg:px-24 py-16 md:py-24 lg:py-56 h-full">
        <p className="bg-gray-100 bg-opacity-20 max-w-fit p-3 flex items-center gap-2 mb-4 font-inter">
          <Icon /> Restoring the Present, Strengthening the Future...!
        </p>
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-5xl pb-7">
          From Foundations to Finishes, <br />
          We Excel in Construction and Repairs
        </h1>
        <button className="bg-[#D7AEB3] font-inter text-[#1C2752] font-semibold lg:text-lg py-2 md:py-3 lg:py-4 px-3 rounded-md md:px-6 lg:px-10 transition-all ease-linear hover:bg-white duration-300">
          Our Services
        </button>
      </div>
    </div>
  );
};

export default Hero;

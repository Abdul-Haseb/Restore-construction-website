import React from "react";
import { Link } from "react-router-dom";

const ServicesCards = ({ data }) => {
  const Text = (string) => {
    return string.slice(0, 228);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col xl:flex-row bg-white rounded-sm shadow-lg gap-2 p-3 items-start xl:items-start justify-center"
        >
          <div className="min-w-[300px] w-full h-full">
            <img
              src={item.image}
              alt="image"
              className="object-center h-[200px] w-full grayscale"
            />
          </div>
          <div className="flex flex-col justify-evenly h-full p-2">
            <div>
              <img src="/images/text.png" alt="" />
            </div>
            <h6 className="font-semibold text-2xl py-2 text-[#1C2752]">
              {item.heading}
            </h6>
            <p className="text-[#7E7E7E]">{Text(item.desc1)}...</p>
            <div className="flex w-full  justify-end">
              <Link to={"/Services"} state={item}>
                <button className="text-xs ml-2 bg-[#E2565D] py-1 px-3  hover:bg-white hover:text-black transition-all duration-300 ease-in hover:border border border-transparent hover:border-[#E2565D] rounded-sm text-white">
                  ReadMore
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;

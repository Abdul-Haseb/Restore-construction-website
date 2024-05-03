import React from "react";

import { newsData } from "./jasonData/MarketSec";
import { NewsSvg, ReadMoreSvg, TimeSvg } from "./Icons";
import { Link } from "react-router-dom";

const NewsCards = () => {
  const data = newsData;
  return (
    <div className="flex gap-10 w-fit ">
      {data.map((data, index) => (
        <div className="flex-none" key={index}>
          <div className="flex flex-col w-[370px] md:w-[411px] h-[530px]  shadow-xl bg-white">
            <div className="w-fit">
              <img src={data.image} alt="image" />
            </div>
            <div className=" text-white flex justify-center -mt-6">
              <span className="bg-[#E2565D] py-3 px-4 text-sm flex items-center gap-2">
                <NewsSvg /> CNN News
              </span>
              <span className="bg-[#DD1F26] py-3 px-4 text-sm flex items-center gap-2">
                <TimeSvg /> April 4, 2023
              </span>
            </div>
            <div className="px-6 pb-4 pt-2 flex flex-col  h-full justify-between">
              <h6 className="font-semibold text-lg md:text-xl lg:text-2xl TEXT-[#1C2752]">
                {data.heading}
              </h6>
              <p className="text-xs md:text-sm text-[#7E7E7E] pb-3">
                {data.desc}
              </p>
              <Link to={data.link}>
                <div className=" flex items-center gap-2 pb-5">
                  ReadMore <ReadMoreSvg />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCards;

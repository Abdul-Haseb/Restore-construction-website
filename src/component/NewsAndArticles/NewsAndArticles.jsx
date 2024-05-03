import React from "react";
import { Heading, NewsSvg, ReadMoreSvg, TimeSvg } from "../Icons";
import { Link } from "react-router-dom";
import NewsCards from "../NewsCards";

const NewsAndArticles = () => {
  return (
    <div className="bg-[#F2F2F2] py-36">
      <div className="px-4 md:px-0 md:pl-10 lg:pl-24">
        <h6 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-7 text-[#1C2752]">
          News & Articles
        </h6>
        <p className="text-[#7E7E7E] font-light font-inter md:text-xl pr-4 md:pr-10 lg:pr-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          iim veniam, quis nostrud exercitation ullamco uij laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi
          in klo ity voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat upidatat non proident, sunt in culpa
          qui officia deserunt
        </p>
      </div>
      <div className="pl-4 md:pl-10 lg:pl-24 w-full mt-8">
        <div id="scrollbar" className="overflow-x-scroll font-inter">
          <NewsCards />
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;

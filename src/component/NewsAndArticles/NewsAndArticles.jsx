import React from "react";
import { Heading, NewsSvg, ReadMoreSvg, RightArrow, TimeSvg } from "../Icons";
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
          Our News and Articles section features a wealth of information on
          industry trends, innovative techniques, and success stories from our
          projects. Discover valuable resources that can help you stay ahead in
          the field of structural strengthening, waterproofing, and more.
          Whether you're looking for practical tips, in-depth analyses, or
          inspiring case studies, you'll find it all here.
        </p>
      </div>
      <div className="pl-4 md:pl-10 lg:pl-24 w-full mt-8">
        <div id="scrollbar" className="overflow-x-scroll font-inter">
          <NewsCards />
        </div>
      </div>
      <div className="w-full flex justify-end mt-10 px-4 md:px-10 lg:px-24">
        <button className="font-thin text-xl flex items-center gap-2 font-inter">
          View All
          <span>
            <RightArrow color={"black"} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewsAndArticles;

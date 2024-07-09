import React from "react";
import { RightArrow } from "./Icons";
import { Link } from "react-router-dom";
import { GalleryData10to19, GalleryData20to23 } from "./jasonData/GalleryData";

const ProjectGalleryCards = () => {
  const data = GalleryData10to19;
  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className="flex-none mr-4 relative md:max-w-sm lg:max-w-md"
        >
          <Link to={data.link}>
            <div>
              <img
                src={data.image}
                alt="image"
                className="w-[270px] md:w-[350px] 2xl:w-full"
              />
            </div>
            <div className="absolute z-10 bottom-3 text-white px-5 pb-5 w-full flex items-end justify-between gap-5 xl:gap-10">
              <div className="italic">
                <h6 className="text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
                  {data.heading}
                </h6>
                <p className="text-xs md:text-sm lg:text-base">{data.desc}</p>
              </div>
              <div className="text-white ">
                <RightArrow color={"white"} />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProjectGalleryCards;

export const ProjectGalleryCards2 = () => {
  const data = GalleryData20to23;
  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className="flex-none mr-4 relative md:max-w-sm lg:max-w-md"
        >
          <Link to={data.link}>
            <div>
              <img
                src={data.image}
                alt="image"
                className="w-[270px] md:w-[350px] 2xl:w-full"
              />
            </div>
            <div className="absolute z-10 bottom-3 text-white px-5 pb-5 w-full flex items-end justify-between gap-5 xl:gap-10">
              <div className="italic">
                <h6 className="text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
                  {data.heading}
                </h6>
                <p className="text-xs md:text-sm lg:text-base">{data.desc}</p>
              </div>
              <div className="text-white ">
                <RightArrow color={"white"} />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

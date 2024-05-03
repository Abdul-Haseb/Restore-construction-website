import React from "react";
import { RightArrow } from "./Icons";
import { Link } from "react-router-dom";

const data = [
  {
    image: "/images/gallery1.png",
    heading: "Mai Dubai Factory-",
    desc: "Stabilization Works and Relctification works",
    link: "/ProjectDetails",
  },
  {
    image: "/images/gallery2.png",
    heading: "Dubai Airport Priority",
    desc: "Dubai Airport Priority 2A Project Related Civil & MEP Works",
  },
  {
    image: "/images/gallery3.png",
    heading: "Refurbishment of Hala",
    desc: "Building (B+G+Roof) Al Muaileh Sharjah",
  },
  {
    image: "/images/gallery4.png",
    heading: " K-48 Villa, Jumeirah",
    desc: "Strengthening & Demolish Works, Dubai",
  },
  {
    image: "/images/gallery4.png",
    heading: " K-48 Villa, Jumeirah",
    desc: "Strengthening & Demolish Works, Dubai",
  },
  {
    image: "/images/gallery4.png",
    heading: " K-48 Villa, Jumeirah",
    desc: "Strengthening & Demolish Works, Dubai",
  },
];

const ProjectGalleryCards = () => {
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
            <div className="absolute z-10 bottom-3 text-white px-5 pb-5 flex items-end justify-between gap-5 xl:gap-10">
              <div className="italic">
                <h6 className="text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
                  {data.heading}
                </h6>
                <p className="text-xs md:text-sm lg:text-base">{data.desc}</p>
              </div>
              <div className="text-white">
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

import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    image: "/images/img.png",
    heading: "Structural Strengthening",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img1.png",
    heading: "Below Grade Waterproofing Repair",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img2.png",
    heading: "Soil Stabilization & Slab Lifting",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img3.png",
    heading: "Concrete Repairs",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img4.png",
    heading: "Condition Assessment of  Concrete Structures",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img5.png",
    heading: "Cathodic Protection of Concrete Structures",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img6.png",
    heading: "Repair of Cracks",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
  {
    image: "/images/img7.png",
    heading: "Facade  Assessment & Repairs",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua. Ut enim ad minimq commodo consequat.",
    desc2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cill  um dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquiia    commodo consequat.",
  },
];
const ServicesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
      {data.map((data, index) => (
        <div
          key={index}
          className="flex flex-col xl:flex-row bg-white rounded-sm shadow-lg gap-2 p-3 items-start xl:items-center justify-center"
        >
          <div className="min-w-[300px] w-full h-full">
            <img
              src={data.image}
              alt="image"
              className="object-center w-full"
            />
          </div>
          <div>
            <div>
              <img src="/images/text.png" alt="" />
            </div>
            <h6 className="font-semibold text-2xl pb-4 text-[#1C2752]">
              {data.heading}
            </h6>
            <p className="text-xs text-[#7E7E7E] pb-4">{data.desc1}</p>
            <p className="text-xs text-[#7E7E7E]">{data.desc2}</p>
            <div className="flex justify-end pt-4">
              <Link to={"/Commercial"}>
                <button className="text-sm bg-[#E2565D] py-2 px-5 hover:bg-white hover:text-black transition-all duration-300 ease-in hover:border border-[#E2565D] rounded-sm text-white">
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

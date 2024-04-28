import React from "react";
import { Heading, NewsSvg, ReadMoreSvg, TimeSvg } from "../Icons";

const data = [
  {
    image: "/images/one.png",
    heading: "Improve Workflow With bluecollar Construction",
    desc: "Pek llentesque vehicula eros neque, maximus mattis etis Nulla kl facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.",
  },
  {
    image: "/images/two.png",
    heading: "The Connection between Electric & Construction Business",
    desc: "Pek llentesque vehicula eros neque, maximus mattis etis Nulla kl facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.",
  },
  {
    image: "/images/three.png",
    heading: "Promising Business in Construction Industry",
    desc: "Pek llentesque vehicula eros neque, maximus mattis etis Nulla kl facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.",
  },
  {
    image: "/images/four.png",
    heading: "Promising Business in Construction Industry",
    desc: "Pek llentesque vehicula eros neque, maximus mattis etis Nulla kl facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.",
  },
  {
    image: "/images/one.png",
    heading: "Improve Workflow With bluecollar Construction",
    desc: "Pek llentesque vehicula eros neque, maximus mattis etis Nulla kl facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.",
  },
  {
    image: "/images/one.png",
    heading: "Improve Workflow With bluecollar Construction",
    desc: "Pek llentesque vehicula eros neque, maximus mattis etis Nulla kl facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.",
  },
];

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
          <div className="flex gap-10 w-fit">
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
                    <div className=" flex items-center gap-2 pb-5">
                      ReadMore <ReadMoreSvg />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;

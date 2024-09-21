import React from "react";
import {
  CommaSvg,
  TestimonialLeftArrow,
  TestimonialRightArrow,
  WhyUsSvg,
} from "../Icons";

const Span = () => (
  <span className="font-bold text-[#1C2752] text-xl">
    "In sed pretium metus"
  </span>
);

const data = [
  {
    img: "/images/user.png",
    name: "Nancy luther",
    place: "New York",
    icon: <CommaSvg />,
    review:
      "Restore exceeded our expectations with their exceptional façade assessment and repair services. Their team conducted a thorough inspection of our building's exterior and identified issues we hadn't noticed. We highly recommend Restore for anyone needing reliable and professional building maintenance.",
  },
  {
    img: "/images/user.png",
    name: "Nancy luther",
    place: "New York",
    icon: <CommaSvg />,
    review:
      "Working with Restore has been a fantastic experience. The team was punctual, professional, and transparent throughout the process. Our property now looks as good as new, and we feel confident that the repairs will hold up for years to come.",
  },
  {
    img: "/images/user.png",
    name: "Nancy luther",
    place: "New York",
    icon: <CommaSvg />,
    review: `The Restore team was knowledgeable, courteous, and dedicated to delivering high-quality results. We are extremely satisfied with their work and would recommend them without hesitation."Restore is our go-to choice for any future repairs and maintenance needs."`,
  },

  {
    img: "/images/user.png",
    name: "Nancy luther",
    place: "New York",
    icon: <CommaSvg />,
    review: `The Restore team was knowledgeable, courteous, and dedicated to delivering high-quality results. We are extremely satisfied with their work and would recommend them without hesitation."Restore is our go-to choice for any future repairs and maintenance needs."`,
  },
  {
    img: "/images/user.png",
    name: "Nancy luther",
    place: "New York",
    icon: <CommaSvg />,
    review: `The Restore team was knowledgeable, courteous, and dedicated to delivering high-quality results. We are extremely satisfied with their work and would recommend them without hesitation."Restore is our go-to choice for any future repairs and maintenance needs."`,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4 md:px-0 md:pl-10 lg:pl-24 bg-gray-100">
      <h6 className="font-semibold text-2xl font-playfair md:text-3xl lg:text-5xl mb-3 text-[#1C2752]">
        Happy Clients -
      </h6>
      <p className="font-light text-[#1C2752] text-xl md:text-2xl ">
        What Our Clients think about us
      </p>
      <p
        className="bg-gray-100 text-[#1C2752]  w-[250px] font-inter  font-medium text-xl mt-5 md:mt-10 mb-3
       flex items-center"
      >
        <span>
          <WhyUsSvg />
        </span>
        Testimonials
      </p>
      <p className="font-semibold text-2xl font-inter mb-4 md:mb-6 md:text-3xl lg:text-5xl text-[#1C2752]">
        Customers Says
      </p>
      <div
        id="scrollbar"
        className="overflow-x-scroll flex items-center font-inter gap-4 md:gap-6 lg:gap-10 flex-shrink-0"
      >
        {data.map((data, index) => (
          <div
            key={index}
            className="bg-white min-w-80 lg:min-w-[500px] p-10 shadow-md"
          >
            <div className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-3">
                <div>
                  <img src={data.img} alt="" className="w-12 md:w-16 lg:w-20" />
                </div>
                <div>
                  <p className="text-[#1C2752]">{data.name}</p>
                  <p className="text-[#7E7E7E] text-sm">{data.place}</p>
                </div>
              </div>
              <div>
                <CommaSvg />
              </div>
            </div>

            <div className="italic text-[#7E7E7E] pt-2 pb-8">{data.review}</div>
            <div className="flex gap-2 items-center ">
              <TestimonialLeftArrow />
              <TestimonialRightArrow />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

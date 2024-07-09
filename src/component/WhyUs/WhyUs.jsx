import React, { useState, useEffect, useRef } from "react";
import useAnimatedNumbers from "../UseAnimatedNumber";
import { TickMarkSvg, WhyUsSvg } from "../Icons";

const data = [
  {
    number: "300+",
    text: "Project Done",
  },
  {
    number: "500+",
    text: "People Working",
  },
  {
    number: "50+",
    text: "Business Partner",
  },
  {
    number: "1000+",
    text: "Happy Customers",
  },
];

const WhyUs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  const animatedNumbers = useAnimatedNumbers(data, isIntersecting); // Pass isIntersecting state to the custom hook

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.5, // Trigger when at least 50% of the target is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className="mt-11 flex flex-col md:grid grid-cols-2 gap-5 md:gap-10 items-center justify-between"
      ref={ref}
    >
      <div className="bg-[url('/images/Image.png')] box-border px-4 flex-shrink md:px-10 lg:px-24  lg:py-28 py-10 md:py-16 object-contain bg-no-repeat flex items-center justify-center ">
        <div className="bg-[#1C2752] py-20 md:py-32 lg:py-48 px-4 md:px-16 lg:px-28 bg-opacity-70 text-white">
          {data.map(({ text }, index) => (
            <div
              className="border border-white flex gap-4 pr-16 mb-5 items-center"
              key={index}
            >
              <span className="bg-[#E2565D] font-extrabold lg:text-2xl w-24 h-16 flex items-center justify-center text-black">
                {animatedNumbers[index]}
                {data[index].number.endsWith("+") && "+"}
              </span>
              <span className="font-extrabold lg:text-2xl font-inter">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:pr-10 lg:pr-24">
        <p className="bg-gray-100 w-[250px] text-[#1C2752]  font-inter px-5 py-3 font-medium text-2xl mb-3 flex items-center">
          <span>
            <WhyUsSvg />
          </span>
          Why Us??!
        </p>
        <h2 className="font-semibold text-2xl text-[#1C2752] md:text-3xl font-playfair lg:text-4xl text mb-3">
          What Makes Us Your Ideal Choice?
        </h2>
        <p className="text-[#7E7E7E] md:text-xl font-light pb-4 font-inter">
          Whether you`re an asset owner, structural manager, contractor, or part
          of a maintenance department, <b className=" font-bold">RESTORE</b> is
          here to provide tailored solutions to address your unique challenges.
          We kickstart our process with a complimentary site visit, delving deep
          into the core of the problem to gain a comprehensive understanding.
        </p>
        <p className="text-[#7E7E7E] md:text-xl font-light pb-10 font-inter">
          We also offer complimentary seminars, providing insights into the
          latest advancements in engineering repairs and structural
          strengthening. Our commitment at RESTORE, is not just to fix problems
          but to empower our clients with knowledge and solutions that stand the
          test of time.
        </p>
        <div className="flex gap-2 items-start pb-8">
          <TickMarkSvg />
          <div className="font-inter ">
            <h3 className="text-lg text-[#1C2752]  lg:text-2xl font-bold">
              10 Years Experience
            </h3>
            <p className="lg:text-xl text-[#7E7E7E]">
              We bring a decade of expertise to the table.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start pb-8">
          <TickMarkSvg />
          <div className="font-inter ">
            <h3 className="text-lg text-[#1C2752] lg:text-2xl font-bold">
              Excellence Certificate
            </h3>
            <p className="lg:text-xl text-[#7E7E7E]">
              We proudly possess a collection of Excellence Certificates
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <TickMarkSvg />
          <div className="font-inter ">
            <h3 className="text-lg lg:text-2xl text-[#1C2752] font-bold">
              Affordable Price
            </h3>
            <p className="lg:text-xl text-[#7E7E7E]">
              We offer competitive pricing to meet your budget needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

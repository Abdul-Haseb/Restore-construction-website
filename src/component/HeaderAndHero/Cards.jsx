import React, { useRef, useState, useEffect } from "react";
import {
  EngineersSvg,
  HappyCustomersSvg,
  ProjectCompletedSvg,
  RepairSolutionsSvg,
} from "../Icons";
import useAnimatedNumbers from "../UseAnimatedNumber";

const data = [
  {
    svg: <ProjectCompletedSvg />,
    number: 200,
    text: "Project Completed",
  },
  {
    svg: <RepairSolutionsSvg />,
    number: "2500+",
    text: "Repair Solutions",
  },
  {
    svg: <EngineersSvg />,
    number: "200+",
    text: "Export Engineers",
  },
  {
    svg: <HappyCustomersSvg />,
    number: "1000+",
    text: "Happy Customers",
  },
];

const Cards = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const animatedNumbers = useAnimatedNumbers(data, isIntersecting);

  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(cardsRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when at least 50% of the target is visible
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardsRef}
      className="max-w-[1150px] mx-auto relative z-10 -mt-24 flex flex-wrap justify-center gap-5"
    >
      {data.map(({ svg, text }, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 py-7 px-14 bg-[#FAFAFA] rounded-sm shadow-lg items-center"
        >
          <span>{svg}</span>
          <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
            {animatedNumbers[index]}
            {typeof data[index].number === "string" &&
              data[index].number.endsWith("+") &&
              "+"}
          </span>
          <span className="text-lg font-inter">{text}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;

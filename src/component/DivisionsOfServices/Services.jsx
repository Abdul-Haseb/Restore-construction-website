import React from "react";
import { RightArrow } from "../Icons";
import ServicesCards from "../ServicesCards";

const Services = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="px-4 md:px-10 lg:px-24 py-14">
        <h5 className="font-semibold font-playfair text-2xl md:text-3xl lg:text-4xl mb-3 text-[#1C2752]">
          Divisions of Services
        </h5>
        <p className="font-light md:text-xl text-[#7E7E7E] font-inter mb-5">
          Restore prides itself on offering a comprehensive range of services
          tailored to meet the diverse needs of our clients. Our team is
          dedicated to providing top-notch service and exceeding expectations.
          With a customer-centric approach and a commitment to quality, we
          strive to be your trusted partner in success.
        </p>
        <div>
          <ServicesCards />
        </div>
        <div className="w-full flex justify-end mt-10">
          <button className="font-thin text-xl flex items-center gap-2 font-inter">
            View All
            <span>
              <RightArrow color={"black"} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

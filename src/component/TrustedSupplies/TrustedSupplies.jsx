import React from "react";

const TrustedSupplies = () => {
  return (
    <div className="py-32 px-4 md:px-10 lg:px-20">
      <h6 className="font-semibold font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1C2752] pb-8">
        Our Trusted Suppliers
      </h6>
      <div className="flex flex-wrap max-w-[1200px] mx-auto py-2">
        <div className="flex items-center justify-between w-full flex-wrap">
          <img
            src="/images/11.webp"
            alt=""
            className="w-full h-auto md:w-[400px] xl:w-[600px]"
          />
          <img
            src="/images/22.webp"
            alt=""
            className="w-full h-auto md:w-[400px] xl:-[600px]"
          />
        </div>
        <div className="flex items-center justify-between flex-wrap w-full py-2">
          <img
            src="/images/33.webp"
            alt=""
            className="w-full md:w-[400px] xl:w-[600px]"
          />
          <img
            src="/images/44.webp"
            alt=""
            className="w-full h-auto md:w-[400px] xl:w-[600px]"
          />
        </div>
        <div className="flex items-center justify-between w-full ml-4 py-4 flex-wrap lg:flex-nowrap">
          <img
            src="/images/55.webp"
            alt=""
            className="w-1/2 h-auto -mt-6 md:mt-0 md:w-[400px]"
          />
          <img
            src="/images/66.webp"
            alt=""
            className="w-1/2 -mt-6 md:mt-0 h-auto md:w-[400px]"
          />
          <img
            src="/images/77.webp"
            alt=""
            className="w-1/2 -mt-6 md:mt-0 h-auto md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedSupplies;

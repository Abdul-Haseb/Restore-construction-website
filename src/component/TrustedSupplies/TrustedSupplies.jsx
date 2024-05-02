import React from "react";

const TrustedSupplies = () => {
  return (
    <div className="py-32 px-4 md:px-10 lg:px-20">
      <h6 className="font-semibold font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1C2752] pb-8">
        Our Trusted Suppliers
      </h6>
      <div className="flex items-end flex-col md:flex-row justify-center">
        <div className="">
          <img src="/images/truested1.png" alt="image" />
        </div>
        <div className="-mb-5">
          <img src="/images/trusted2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TrustedSupplies;

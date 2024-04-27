import React from "react";

const TrustedSupplies = () => {
  return (
    <div className="py-32 px-4 md:px-10 lg:px-20">
      <h6 className="font-semibold font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1C2752] pb-8">
        FREE CONSULTATION
      </h6>
      <div className="flex items-center flex-col md:flex-row">
        <div>
          <img src="/images/truested1.png" alt="image" />
        </div>
        <div
          className="mt-10
        "
        >
          <img src="/images/trusted2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TrustedSupplies;

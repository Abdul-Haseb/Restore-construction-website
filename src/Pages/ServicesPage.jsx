import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import ServicesCards from "../component/ServicesCards";

const ServicesPage = () => {
  return (
    <MainLayout>
      <div className="md:-mt-10">
        <div className="bg-[url('/images/servicesbanner.png')] object-cover w-full h-full mb-10">
          <h6 className="px-4 md:px-10 lg:px-24 font-extrabold relative z-10 py-48 text-white text-2xl md:text-3xl lg:text-5xl text-center font-inter">
            SERVICES
          </h6>
        </div>
        <div className="px-4 md:px-10 lg:px-24 mb-40">
          <ServicesCards />
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;

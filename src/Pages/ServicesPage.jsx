import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import ServicesCards from "../component/ServicesCards";
import { Servicedata } from "../component/jasonData/ServicesSec";

const ServicesPage = () => {
  const data = Servicedata;
  // useEffect(() => {
  //   // Scroll to the top of the page when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <MainLayout>
      <div className="md:-mt-10">
        <div className="bg-[url('/images/servicesbanner.png')] object-cover w-full h-full mb-10">
          <h6 className="px-4 md:px-10 lg:px-24 relative z-10 pt-52 pb-10  text-white text-2xl md:text-3xl lg:text-5xl font-playfair font-extrabold">
            SERVICES
          </h6>
        </div>
        <div className="px-4 md:px-10 lg:px-24 mb-40">
          <ServicesCards data={data} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;

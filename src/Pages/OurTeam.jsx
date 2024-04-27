import React from "react";
import MainLayout from "../component/Layout/MainLayout";

const OurTeam = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/teamBanner.png')] object-cover w-full h-full -mt-10">
        <h6 className="px-4 md:px-10 lg:px-24 relative z-10 py-48  text-white text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-inter">
          OUR TEAM
        </h6>
      </div>
      <div className="font-inter px-4 md:px-10 lg:px-24">
        <p className="font-semibold">DESCRIPTION</p>
      </div>
    </MainLayout>
  );
};

export default OurTeam;

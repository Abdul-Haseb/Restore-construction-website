import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import ProjectGalleryCards from "../component/ProjectGalleryCards";
import { useEffect } from "preact/hooks";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on component mount
  }, []);
  return (
    <MainLayout>
      <div className="-mt-10">
        <div className="bg-[url('/images/projectdetailbanner.png')] object-contain w-full h-full md:-mt-10">
          <div className="flex items-start flex-col pt-52 pb-12 px-4 md:px-10 lg:px-24 z-10 text-white gap-2">
            <h1 className=" relative  text-2xl md:text-3xl lg:text-5xl text-center font-medium font-inter">
              PROJECT: Mai Dubai Factory
            </h1>
            <p className="font-inter text-xl md:text-2xl font-light lg:text-3xl">
              Stabilization Works and Rectification works
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-12 px-4 md:px-10 lg:px-24 text-[#7E7E7E]">
          <div className="flex items-center flex-col-reverse md:flex-row justify-around gap-5 md:gap-10 lg:gap-20 overflow-hidden ">
            <div className=" w-full md:w-[350px] bg-[#D2D2D2] px-7 py-8 flex flex-col justify-between">
              <p className="font-mulish font-bold text-lg md:text-xl text-[#1C2752] pb-4 border-b">
                Project Information
              </p>
              <div className="p-4 border-b">
                <p className="font-bold font-mulish text-[#1c2752] md:text-lg">
                  Client:
                </p>
                <p className="text-[#7E7E7E] text-sm md:text-base font-inter">
                  ABC hys
                </p>
              </div>
              <div className="p-4 border-b">
                <p className="font-bold font-mulish text-[#1c2752] md:text-lg">
                  Location :
                </p>
                <p className="text-[#7E7E7E] text-sm md:text-base font-inter">
                  Dubai UAE
                </p>
              </div>
              <div className="p-4 border-b">
                <p className="font-bold font-mulish text-[#1c2752] md:text-lg">
                  Project Date :
                </p>
                <p className="text-[#7E7E7E] text-sm md:text-base font-inter">
                  15 December ,2022
                </p>
              </div>
              <div className="p-4 border-b">
                <p className="font-bold font-mulish text-[#1c2752] md:text-lg">
                  Category :
                </p>
                <p className="text-[#7E7E7E] text-sm md:text-base font-inter">
                  Service
                </p>
              </div>
              <div className="p-4 border-b">
                <p className="font-bold font-mulish text-[#1c2752] md:text-lg">
                  Value :
                </p>
                <p className="text-[#7E7E7E] text-sm md:text-base font-inter">
                  $ 2 250 000
                </p>
              </div>
            </div>
            <div className="lg:h-[530px]  flex items-center">
              <img
                src="/images/projectdetail1.png"
                alt="image"
                className="h-full"
              />
            </div>
          </div>

          <div className="md:py-24 py-12 font-inter">
            <h2 className=" relative text-[#1c2752] mb-3 text-2xl md:text-3xl lg:text-5xl font-medium font-inter">
              PROJECT: Mai Dubai Factory
            </h2>
            <p className="md:text-lg mb-7">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium dynamically target high-payoff
              intellectual capital for customized technologies objectively
              integrate emerging core competencies before process-centric
              communities dramatically evisculate holistic innovation rather
              than client-centric data.
            </p>
            <p className=" md:text-lg mb-5">
              1. Listen to what they say about you
            </p>
            <p className=" md:text-lg mb-5">2. Randomised words which.</p>
            <p className=" md:text-lg mb-5">
              3. Internet tend to repeat predefined chunks
            </p>
            <p className="md:text-lg mb-7">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <p className=" md:text-lg mb-5">
              1. Interactively procrastinate high-payoff content
            </p>
            <p className=" md:text-lg mb-5">
              2. Randomised words which don't look even slightly believable.
            </p>
            <p className=" md:text-lg mb-5">
              3. Your best work, together in one package that works seamlessly
              from your computer
            </p>
            <p className=" md:text-lg mb-6">
              4. Delivers the tools you need to save time Improve field
              performance always
            </p>
            <p className="mb-7 md:text-lg">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-7 font-inter text-[#1C2752]">
              Related Projects
            </h3>
            <div id="scrollbar" className="flex gap-5 overflow-x-auto">
              <ProjectGalleryCards />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetails;

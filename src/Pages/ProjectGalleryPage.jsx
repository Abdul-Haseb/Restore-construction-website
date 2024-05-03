import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import ProjectGalleryCards from "../component/ProjectGalleryCards";

const ProjectGalleryPage = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/galleryBanner.png')] object-cover w-full h-full md:-mt-10">
        <h6 className="px-4 md:px-10 lg:px-24 relative z-10 py-48 text-white text-2xl md:text-3xl lg:text-5xl text-center font-inter font-extrabold">
          PROJECT GALLERY
        </h6>
      </div>
      <div className="px-4 md:px-10 lg:px-24 flex flex-col items-center">
        <p className="max-w-screen-xl md:text-lg font-inter pt-10 text-center text-[#2B2B2B]">
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit. Lorem ipsum dolor sit amet consectetur.
          Quam Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
          Diam lacus platea orci vel elit. Lorem ipsum dolor sit amet
          consectetur. Quam
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-32 items-center gap-10">
          <ProjectGalleryCards />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectGalleryPage;

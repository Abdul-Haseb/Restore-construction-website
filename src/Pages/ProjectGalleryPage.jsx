import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import ProjectGalleryCards, {
  ProjectGalleryCards2,
} from "../component/ProjectGalleryCards";

const ProjectGalleryPage = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/galleryBanner.png')] object-cover w-full h-full md:-mt-10">
        <h1 className="px-4 md:px-10 lg:px-24 relative z-10 py-48 text-white text-2xl md:text-3xl lg:text-5xl text-center font-inter font-extrabold">
          PROJECT GALLERY
        </h1>
      </div>
      <div className="px-4 md:px-10 lg:px-24 flex flex-col items-center">
        <p className="max-w-screen-xl md:text-lg font-inter py-20 text-center text-lg font-medium text-[#2B2B2B]">
          Discover a diverse portfolio showcasing our expertise & commitment to
          excellence to witness the transformative impact of our services. From
          intricate structural repairs to large-scale renovations, our portfolio
          exemplifies our commitment to delivering exceptional results.
        </p>
        <h2 className="font-semibold w-full text-2xl text-[#1C2752] md:text-3xl font-playfair lg:text-4xl text-left  mb-6 px-6">
          2020-23 Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 pb-32">
          <ProjectGalleryCards2 />
        </div>
        <h2 className="font-semibold w-full text-2xl text-[#1C2752] md:text-3xl font-playfair lg:text-4xl text-left  mb-6 px-6">
          2010-19 Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 pb-32">
          <ProjectGalleryCards />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectGalleryPage;

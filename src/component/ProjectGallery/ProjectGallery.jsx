import ProjectGalleryCards from "../ProjectGalleryCards";

const ProjectGallery = () => {
  return (
    <div className="px-4 md:px-0 md:pl-10 lg:pl-24 py-36 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 lg:gap-6">
      <div className="max-w-[367px]">
        <h6 className="font-semibold text-3xl font-playfair md:text-4xl lg:text-5xl mb-3 text-[#1C2752]">
          RESTORE <br /> Project Gallery
        </h6>
        <p className="font-inter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          doloremque maxime deleniti natus quidem tenetur earum molestias libero
        </p>
      </div>
      <div
        id="scrollbar"
        className="flex flex-nowrap  overflow-x-scroll scrollbar-hide font-inter"
      >
        <ProjectGalleryCards />
      </div>
    </div>
  );
};

export default ProjectGallery;

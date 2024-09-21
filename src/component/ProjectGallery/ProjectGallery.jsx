import { useNavigate } from "react-router-dom";
import { RightArrow } from "../Icons";
import { GalleryData20to23 } from "../jasonData/GalleryData";
import ProjectGalleryCards from "../ProjectGalleryCards";

const ProjectGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 md:px-0 md:pl-10 lg:pl-24 pt-36 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 lg:gap-6">
        <div className="max-w-[367px]">
          <h6 className="font-semibold text-3xl font-playfair md:text-4xl lg:text-5xl mb-3 text-[#2B2B2B]">
            RESTORE <br /> Project Gallery
          </h6>
          <p className="font-inter">
            Explore Project Gallery to see how we have transformed various
            structures, enhanced their durability, and brought our clients'
            visions to life.
          </p>
        </div>
        <div
          id="scrollbar"
          className="flex flex-nowrap  overflow-x-scroll scrollbar-hide font-inter"
        >
          <ProjectGalleryCards data={GalleryData20to23} />
        </div>
      </div>
      <div className="w-full flex justify-end mt-10 pb-36 px-4 md:px-10 lg:px-24">
        <button
          onClick={() => navigate("/ProjectGallery")}
          className="font-thin text-xl flex items-center gap-2 font-inter"
        >
          View All
          <span>
            <RightArrow color={"black"} />
          </span>
        </button>
      </div>
    </>
  );
};

export default ProjectGallery;

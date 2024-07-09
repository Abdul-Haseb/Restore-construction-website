import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../component/Model";
import { RightArrow } from "./Icons";

const ProjectGalleryCards = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex-none mr-4 relative md:max-w-sm lg:max-w-md"
          onClick={() => handleCardClick(item)}
        >
          <div>
            <img
              src={item.image}
              alt="image"
              className="w-[270px] md:w-[350px] 2xl:w-full"
            />
          </div>
          <div className="absolute z-10 bottom-3 text-white px-5 pb-5 w-full flex items-end justify-between gap-5 xl:gap-10">
            <div className="italic">
              <h6 className="text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
                {item.heading}
              </h6>
              <p className="text-xs md:text-sm lg:text-base">{item.desc}</p>
            </div>
            <div className="text-white">
              <RightArrow color={"white"} />
            </div>
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && (
          <div
            // onClick={handleModalClick}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div>
              <img
                src={selectedItem.image}
                alt="image"
                className="h-[80vh] w-auto"
              />
            </div>
            <div>
              <h6 className="font-semibold text-2xl md:text-3xl lg:text-4xl md:font-bold py-2 text-[#1C2752]">
                {selectedItem.heading}
              </h6>
              <p className="font-playfair text-gray-700 font-medium text-lg md:text-xl">
                {selectedItem.desc}
              </p>
              <Link to={selectedItem.link} state={{ selectedItem }}>
                <button className="p-2 flex items-center gap-2 text-gray-700 font-semibold md:text-xl">
                  Read More <RightArrow color={"#000"} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectGalleryCards;

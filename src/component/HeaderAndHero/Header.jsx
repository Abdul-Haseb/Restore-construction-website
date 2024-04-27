import React from "react";
import {
  CallIcon,
  FacebookSvg,
  InstaSvg,
  MailSvg,
  PintrestSvg,
  TwitterSvg,
} from "../Icons";
import { useState } from "preact/hooks";

const NavLinks = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "About Us",
    link: "/",
  },
  {
    page: "Services",
    link: "/",
  },
  {
    page: "Project Gallery",
    link: "/",
  },
  {
    page: "Our Team",
    link: "/",
  },
];
const Header = () => {
  // State For the current Tab
  const [activeTab, setActiveTab] = useState(0);

  const handleActivePage = (getCurrentIndex) => setActiveTab(getCurrentIndex);

  return (
    <div className="">
      {/* TIMING AND SOCILA LINKS  */}
      <div className="pt-5 pb-4 px-4 md:px-10 lg:px-24 bg-[#F2F2F2] flex items-center justify-between">
        <p className="md:text-lg ml-10 font-inter">
          Opening Hours: 09:00AM to 05:00PM
        </p>

        {/* Social Links  */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <InstaSvg />
          <FacebookSvg />
          <TwitterSvg />
          <PintrestSvg />
        </div>
      </div>
      {/* Logo & Mail & Contact  */}
      <div className="px-4 md:px-10 lg:px-24 py-7 flex justify-between">
        {/* Logo  */}
        <div className="w-32 md:w-48 lg:w-full">
          <img
            src="/images/Logo.png"
            alt="logo"
            className="w-24 md:w-32 lg:w-40 xl:w-52"
          />
        </div>

        {/* Mail and Contact  */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          {/* Mail  */}
          <div className="flex items-center gap-2">
            <MailSvg />
            <div className="font-inter">
              <p>Mail us</p>
              <p className="text-[#7E7E7E]">Info@restore.com</p>
            </div>
          </div>

          {/* Contact  */}
          <div className="flex items-center gap-2">
            <CallIcon />
            <div className="font-inter">
              <p>Call us</p>
              <p className="text-[#7E7E7E]">+971 096 0554</p>
            </div>
          </div>
        </div>
      </div>
      {/* NavLinks  */}
      <div className="max-w-fit items-center relative font-inter z-10 bg-primary mx-auto py-3 rounded-sm px-5 text-white flex gap-5 cursor-pointer">
        {NavLinks.map(({ page, link }, index) => (
          <span
            className={
              activeTab === index
                ? "border-white border-b-2 cursor-pointer"
                : ""
            }
            key={index}
            onClick={() => handleActivePage(index)}
          >
            {page}
          </span>
        ))}

        {/* Book Consultaion Button  */}
        <div>
          <button className="py-2 md:py-4 lg:py-5 px-3 rounded-md md:px-5 lg:px-7 bg-black text-white font-semibold transition-all ease-in duration-300 hover:bg-white hover:text-black border-transparent border hover:border-black">
            Book Consultaion Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

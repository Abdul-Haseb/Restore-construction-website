import React from "react";
import {
  CallIcon,
  FacebookSvg,
  Hamburger,
  InstaSvg,
  MailSvg,
  PintrestSvg,
  TwitterSvg,
} from "../Icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "preact/hooks";

const NavLinks = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "About Us",
    link: "/AboutUs",
  },
  {
    page: "Services",
    link: "/ServicesPage",
  },
  {
    page: "Project Gallery",
    link: "/ProjectGalleryPage",
  },
  {
    page: "Our Team",
    link: "/OurTeam",
  },
];

const Header = () => {
  const [MobileNaveOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => setMobileNavOpen(!MobileNaveOpen);

  // Add a class to the root element to disable scrolling and prevent interaction
  document.documentElement.classList.toggle("no-scroll", MobileNaveOpen);

  const location = useLocation(); // Get the current location

  const isActive = (link) => {
    return location.pathname === link; // Check if the current URL matches the link
  };

  return (
    <div className="">
      {/* TIMING AND SOCIAL LINKS */}
      <div className="pt-5 pb-4 px-4 md:px-10 lg:px-24 bg-[#F2F2F2] hidden md:flex items-center justify-between ">
        <p className="md:text-lg ml-10 font-inter ">
          Opening Hours: 09:00AM to 05:00PM
        </p>

        {/* Social Links */}
        <div className="items-center gap-2 md:gap-3 lg:gap-4 hidden md:flex">
          <InstaSvg />
          <FacebookSvg />
          <TwitterSvg />
          <PintrestSvg />
        </div>
      </div>

      <div className="items-center gap-4 md:hidden flex mt-3">
        {/* Mail */}
        <div className="flex items-center gap-2">
          <MailSvg width={40} />
          <div className="font-inter">
            <p>Mail us</p>
            <p className="text-[#7E7E7E] text-sm">Info@restore.com</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2">
          <CallIcon width={40} />
          <div className="font-inter">
            <p>Call us</p>
            <p className="text-[#7E7E7E] text-sm">+971 096 0554</p>
          </div>
        </div>
      </div>

      {/* Logo & Mail & Contact */}
      <div className="px-4 md:px-10 lg:px-24 py-4 md:py-7 mb-5 md:mb-0 flex justify-between  items-center">
        {/* Logo  and Hamburger*/}
        <div className="md:hidden" onClick={handleMobileNav}>
          <Hamburger />
        </div>
        <div className="w-52 md:w-48 lg:w-52">
          <Link to={"/"}>
            <img src="/images/Logo.png" alt="logo" className="w-full" />
          </Link>
        </div>
        <div />

        {/* Mail and Contact */}
        <div className="items-center gap-4 whitespace-nowrap hidden md:flex">
          {/* Mail */}
          <div className="flex items-center gap-2">
            <MailSvg width={50} />
            <div className="font-inter">
              <p>Mail us</p>
              <p className="text-[#7E7E7E]">Info@restore.com</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2">
            <CallIcon width={50} />
            <div className="font-inter">
              <p>Call us</p>
              <p className="text-[#7E7E7E]">+971 096 0554</p>
            </div>
          </div>
        </div>
      </div>
      {/* NavLinks */}
      {MobileNaveOpen && <MobileNav handleMobileNav={handleMobileNav} />}
      <div className="max-w-fit hidden md:flex items-center relative font-inter z-40 bg-primary mx-auto py-3 rounded-sm px-5 text-white gap-5 cursor-pointer">
        {NavLinks.map(({ page, link }, index) => (
          <span
            key={index}
            className={`p-1 ${
              isActive(link) &&
              "border-white border-b-2 cursor-pointer text-[#F1EFF2] font-bold"
            }`}
          >
            <Link to={link}>{page}</Link>
          </span>
        ))}

        {/* Book Consultation Button */}
        <div>
          <Link to={"/BookConsultaion"}>
            <button className="py-2 md:py-4 lg:py-5 px-3 rounded-md md:px-5 lg:px-7 bg-black text-white font-semibold transition-all ease-in duration-300 hover:bg-white hover:text-black border-transparent border hover:border-black">
              Book Consultation Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

const MobileNav = ({ handleMobileNav }) => {
  return (
    <div className="fixed top-0 z-30 left-0 w-fit">
      <div className="relative h-screen flex flex-col font-inter z-50 bg-primary mx-auto py-3 rounded-sm px-5 text-white gap-5 cursor-pointer">
        <div className="absolute top-5 right-5" onClick={handleMobileNav}>
          &times;
        </div>
        {NavLinks.map(({ page, link }, index) => (
          <div key={index} onClick={handleMobileNav}>
            <Link to={link}>{page}</Link>
          </div>
        ))}

        {/* Book Consultation Button */}
        <div onClick={handleMobileNav}>
          <Link to={"/BookConsultaion"}>
            <button className="py-2 md:py-4 lg:py-5 px-3 rounded-md md:px-5 lg:px-7 bg-black text-white font-semibold transition-all ease-in duration-300 hover:bg-white hover:text-black border-transparent border hover:border-black">
              Book Consultation Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

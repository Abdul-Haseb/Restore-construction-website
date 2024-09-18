import React from "react";
import {
  FooterCall,
  FooterFb,
  FooterInsta,
  FooterLinkedIn,
  FooterLocation,
  FooterMail,
  FooterMaill,
} from "../Icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-10 bg-[#ABABAB] px-4 md:px-10 lg:px-24 font-inter">
      <div className="pb-2 border-b">
        <img
          src="/images/Logo.png"
          alt="logo"
          className="w-36 md:w-40 lg:w-46 xl:w-52"
        />
      </div>
      <div className="flex justify-between flex-col md:flex-row border-b py-4 items-start md:items-center">
        <div className=" flex flex-col py-4 justify-between px-10 flex-1">
          <p className="lg:text-xl max-w-lg text-white">
            Delivering innovative engineering solutions and Committed to
            quality, safety, and sustainability in every project we undertake.
          </p>
          <div className="flex gap-4 items-center mt-5 cursor-pointer">
            <FooterInsta />
            <FooterFb />
            <FooterLinkedIn />
            <FooterMaill />
          </div>
        </div>
        <div className="flex flex-col text-white lg:text-lg gap-2 py-4 flex-1 border-t mt-10 md:border-l md:border-t-0 px-10">
          <h6 className="font-semibold">Explore</h6>
          <span className="cursor-pointer" onClick={() => navigate("/AboutUs")}>
            About Us
          </span>
          <span
            className="cursor-pointer"
            onClick={() => navigate("/ServicesPage")}
          >
            Services
          </span>
          <span className="cursor-pointer" onClick={() => navigate("/OurTeam")}>
            Our Team
          </span>
          <span
            className="cursor-pointer"
            onClick={() => navigate("/ProjectGalleryPage")}
          >
            Project Gallery
          </span>
        </div>
        <div className="text-white flex flex-col gap-4 px-10 py-4 border-t md:border-l mt-10 md:border-t-0">
          <div className="flex items-center gap-2">
            <FooterMail />
            <p className="flex flex-col">
              <span className="font-semibold">Mail Us</span>
              <span>Info@restoreeme.ae</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FooterCall />
            <p className="flex flex-col">
              <span className="font-semibold">Call Us</span>
              <span>+9714 344 9711</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FooterLocation />
            <p className="flex flex-col">
              <span className="font-semibold">Location</span>
              <span>Apricot Tower DSO Dubai UAE</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center py-4 text-white text-sm">
        <p>
          Copyright © Restore | All Rights Reserved | Privacy Policy | Terms and
          Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;

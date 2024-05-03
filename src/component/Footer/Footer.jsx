import React from "react";
import {
  FooterCall,
  FooterFb,
  FooterInsta,
  FooterLocation,
  FooterMail,
  FooterPintrest,
  FooterTwitter,
} from "../Icons";

const Footer = () => {
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
            Denouncing pleasure and praising pain was born and I will givg you a
            coghmplete acchount of the system, and expound the actual
          </p>
          <div className="flex gap-4 items-center mt-5">
            <FooterInsta />
            <FooterFb />
            <FooterTwitter />
            <FooterPintrest />
          </div>
        </div>
        <div className="flex flex-col text-white lg:text-lg gap-2 py-4 flex-1 border-t mt-10 md:border-l md:border-t-0 px-10">
          <h6 className="font-semibold">Explore </h6>
          <span>About Us</span>
          <span>Services</span>
          <span>Our Team</span>
          <span>Project Gallery</span>
        </div>
        <div className="text-white flex flex-col gap-4 px-10 py-4 border-t md:border-l mt-10 md:border-t-0">
          <div className="flex items-center gap-2">
            <FooterMail />
            <p className="flex flex-col">
              <span className="font-semibold">Mail Us</span>
              <span>Info@Example.com</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FooterCall />
            <p className="flex flex-col">
              <span className="font-semibold">Call Us</span>
              <span>+01 569 869 654</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FooterLocation />
            <p className="flex flex-col">
              <span className="font-semibold">Location</span>
              <span>Apricat Tower DSO</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center py-4 text-white text-sm">
        <p>
          Copyright © Restore | All Rights Reserved | Privacy Policy | Terms
          and Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;

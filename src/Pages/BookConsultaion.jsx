import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import ContactForm from "../component/ContactUs/ContactForm";
import { WhyUsSvg } from "../component/Icons";

const BookConsultaion = () => {
  return (
    <MainLayout>
      <div className="relative md:-mt-10">
        <div className="bg-[url('/images/Banner.png')] object-cover w-full h-full">
          <h6 className="px-4 md:px-10 lg:px-24 relative z-10 py-48 text-white text-2xl md:text-3xl lg:text-5xl text-center font-mulish font-extrabold">
            Book Consultation Now
          </h6>
        </div>
        <div className="flex items-center flex-col my-10">
          <p className="bg-gray-100 w-[250px] text-[#1C2752]  font-inter px-5 py-3 font-medium text-2xl mb-3 flex items-center">
            <span>
              <WhyUsSvg />
            </span>
            Quick Contact
          </p>
          <h6 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
            Connect for Quick Consultation
          </h6>
          <p className="text-[#7E7E7E] max-w-lg">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-0">
          <div className="">
            <img
              src="/images/emergency.png"
              alt=""
              className="hover:scale-105 transition-all duration-300 ease-in"
            />
          </div>
          <div>
            <img
              src="/images/main.png"
              alt=""
              className="hover:scale-105 transition-all duration-300 ease-in"
            />
          </div>
          <div>
            <img
              src="/images/question.png"
              alt=""
              className="hover:scale-105 transition-all duration-300 ease-in"
            />
          </div>
        </div>
        <div className="-mt-10">
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default BookConsultaion;

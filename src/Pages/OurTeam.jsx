import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import {
  TeamMemberInsta,
  TeamMemberLinkedIn,
  TeamMemberMail,
} from "../component/Icons";
const TeamData = [
  {
    image: "/images/asim.png",
    postion: "General Manager",
    name: "Asim Jabbar",
    mail: <TeamMemberMail />,
    linkedin: <TeamMemberLinkedIn />,
    instagram: <TeamMemberInsta />,
  },
  {
    image: "/images/saad.png",
    postion: "Team Lead",
    name: "M Saad Hassan",
    mail: <TeamMemberMail />,
    linkedin: <TeamMemberLinkedIn />,
    instagram: <TeamMemberInsta />,
  },
  {
    image: "/images/yasir.png",
    postion: "President of Sales",
    name: "Yasir Saeed",
    mail: <TeamMemberMail />,
    linkedin: <TeamMemberLinkedIn />,
    instagram: <TeamMemberInsta />,
  },
  {
    image: "/images/team4.png",
    postion: "HR Assistant",
    name: "Ashraf",
    mail: <TeamMemberMail />,
    linkedin: <TeamMemberLinkedIn />,
    instagram: <TeamMemberInsta />,
  },
  // {
  //   image: "/images/team1.png",
  //   postion: "General Manager",
  //   name: "Bilal khalid",
  //   mail: <TeamMemberMail />,
  //   linkedin: <TeamMemberLinkedIn />,
  //   instagram: <TeamMemberInsta />,
  // },
  // {
  //   image: "/images/team1.png",
  //   postion: "General Manager",
  //   name: "Habib",
  //   mail: <TeamMemberMail />,
  //   linkedin: <TeamMemberLinkedIn />,
  //   instagram: <TeamMemberInsta />,
  // },
  // {
  //   image: "/images/team1.png",
  //   postion: "General Manager",
  //   name: "Annette Black",
  //   mail: <TeamMemberMail />,
  //   linkedin: <TeamMemberLinkedIn />,
  //   instagram: <TeamMemberInsta />,
  // },
  // {
  //   image: "/images/team1.png",
  //   postion: "General Manager",
  //   name: "Annette Black",
  //   mail: <TeamMemberMail />,
  //   linkedin: <TeamMemberLinkedIn />,
  //   instagram: <TeamMemberInsta />,
  // },
];
const OurTeam = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/teamBanner.png')] object-cover w-full h-full md:-mt-10">
        <h6 className="px-4 md:px-10 lg:px-24 relative z-10 py-48  text-white text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-inter">
          OUR TEAM
        </h6>
      </div>
      <div className="font-inter px-4 md:px-10 lg:px-24 pt-20">
        <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          DESCRIPTION
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 lg:px-24 gap-5 md:gap-10 mb-40">
        {TeamData.map(
          ({ image, postion, name, mail, linkedin, instagram }, index) => (
            <div key={index} className="shadow-md rounded-3xl font-jakarta">
              <div>
                <img src={image} alt={name} className="w-full" />
              </div>
              <div className="py-9 flex flex-col gap-4 items-center justify-center">
                <p className="font-medium md:text-lg text-[#E2565D]">
                  {postion}
                </p>
                <p className="text-[#454545] font-medium text-xl text-nowrap md:text-2xl lg:text-3xl">
                  {name}
                </p>
                <div className="flex items-center gap-2 justify-center">
                  <span>{mail}</span>
                  <span>{linkedin}</span>
                  <span>{instagram}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </MainLayout>
  );
};

export default OurTeam;

import { Link, useLocation } from "react-router-dom";
import {
  AvailibilitySvg,
  FreeSiteVisit,
  PerfectionSvg,
  TickMarkSvg,
} from "../component/Icons";
import MainLayout from "../component/Layout/MainLayout";
import { useEffect, useState } from "preact/hooks";

const ServicesDetails = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const item = location?.state;

  const data = [
    {
      icon: (
        <>
          <AvailibilitySvg />
        </>
      ),
      title: "24/7 Availability",
      desc: "Around-the-clock support to ensure your needs are met anytime, anywhere",
    },
    {
      icon: (
        <>
          <PerfectionSvg />
        </>
      ),
      title: <>{item?.innerHead ? item.innerHead : "Perfect Estimation"}</>,
      desc: "Unlock insights into project costs with our complimentary estimation service.",
    },
    {
      icon: (
        <>
          <FreeSiteVisit />
        </>
      ),
      title: "Free Site Visits",
      desc: "Schedule a complimentary on-site assessment for personalized solutions ",
    },
  ];
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Reset scroll position to top on component mount
  // }, []);

  const handleSideMenu = () => setSideMenu(!sideMenu);
  return (
    <MainLayout>
      <div className="md:-mt-10">
        <div className="bg-[url('/images/servicesbanner.png')] object-cover w-full h-full mb-10">
          <h1 className="px-4 md:px-10 lg:px-14 font-extrabold relative z-10 pt-52 pb-10 text-white text-2xl md:text-3xl lg:text-5xl font-playfair">
            {item?.innerh1} -
            <span className="font-normal font-inter">Services</span>
          </h1>
        </div>
        <div className="px-4 md:px-10 lg:px-14 py-3 md:py-9 flex items-start md:gap-10 h-full relative">
          <div className="md:hidden">
            <div
              className={`absolute -top-8 left-0 z-20 transition-all duration-500 ease-in-out ${
                sideMenu ? "rotate-90" : "rotate-0"
              }`}
              onClick={handleSideMenu}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            {hover && (
              <p className="text-xs font-medium absolute -top-7 left-6 whitespace-nowrap bg-gray-200 font-inter p-1">
                Solutions for
              </p>
            )}
          </div>
          <div
            className={`bg-[#DDDDDD] min-w-[375px] ${
              sideMenu ? "absolute left-0 right-0 mx-auto" : "hidden md:block"
            } pt-4 px-5 h-fit`}
          >
            <div className="bg-[url('/images/cbg.png')] w-full h-fit md:h-full py-10 md:py-24 bg-no-repeat mb-6 text-white flex items-center justify-center flex-col font-inter">
              <div className="font-semibold text-lg md:text-xl pb-6 whitespace-nowrap">
                Providing Varity <br /> Repair Services
              </div>
              <Link to={"/BookConsultaion"}>
                <button className="py-2 px-3 rounded-md md:px-5 lg:px-7 mb-6 bg-[#E2565D] text-white font-semibold transition-all ease-in duration-300 hover:bg-white hover:text-black border-transparent border hover:border-black">
                  Book your <br />
                  <span className="font-bold">CONSULTATION</span>
                </button>
              </Link>
              <div className="font-semibold text-lg md:text-xl whitespace-nowrap">
                Call us directly <br />
                +971 4 344 9711
              </div>
            </div>
            <h4 className="font-inter font-semibold text-black text-xl md:text-2xl lg:text-3xl">
              Solutions for
            </h4>
            {item.solutions?.map((sol, index) => (
              <p
                key={index}
                className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1"
              >
                <TickMarkSvg />
                {sol}
              </p>
            ))}

            <div className="py-16 md:mb-72">
              <div className="pb-6 hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
                <img src="/images/pdfbtn.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div onClick={() => setSideMenu(false)}>
              <img src={item?.innerimg} alt="image" />
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#1C2752] font-playfair pt-8 pb-3">
                {item?.innerh2}
              </h2>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                {item?.innerp1}
              </p>
              <div className="bg-[#DD1F26] flex font-inter justify-end mb-8">
                <div className="bg-[#E2565D] w-[95%] text-white py-8 px-4 md:px-20">
                  <p className="italic mb-4 md:text-xl text-center">
                    {item?.innerp2}
                  </p>
                </div>
              </div>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                {item?.innerp3}
              </p>

              <div className="py-12 px-12 flex items-center gap-7 flex-col md:flex-row  justify-between mb-4 md:mb-10 lg:mb-16 bg-[#F4F4F4]">
                {data.map(({ icon, title, desc }, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 max-w-sm"
                  >
                    {/* Icon Placeholder */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      {/* Replace with actual logo or icon */}
                      <span>{icon}</span>
                    </div>

                    {/* Text Section */}
                    <div>
                      <h4 className="font-bold font-mulish text-[#1C2752] text-lg md:text-2xl lg:text-3xl pb-2">
                        {title}
                      </h4>
                      <p className="text-sm text-gray-600 font-inter">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-[#0D0E10] font-semibold text-xl md:text-2xl lg:text-4xl font-playfair pb-4">
                {item?.innerh3}
              </h3>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify">
                {item?.innerp4}
              </p>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                {item?.innerline}
              </p>
              <div>
                {item.innerpoints?.map((points, index) => (
                  <p
                    key={index}
                    className="font-medium font-inter text-sm md:text-base text-[#7E7E7E] flex items-center gap-3 pb-4"
                  >
                    <TickMarkSvg />
                    {points}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesDetails;

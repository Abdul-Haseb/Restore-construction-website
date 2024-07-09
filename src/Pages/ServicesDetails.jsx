import { Link, useLocation } from "react-router-dom";
import { TickMarkSvg } from "../component/Icons";
import MainLayout from "../component/Layout/MainLayout";
import { useEffect } from "preact/hooks";

const ServicesDetails = () => {
  const location = useLocation();
  const item = location?.state;
  console.log(item?.innerpoints);
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Reset scroll position to top on component mount
  // }, []);
  return (
    <MainLayout>
      <div className="md:-mt-10">
        <div className="bg-[url('/images/servicesbanner.png')] object-cover w-full h-full mb-10">
          <h1 className="px-4 md:px-10 lg:px-14 font-extrabold relative z-10 pt-52 pb-10 text-white text-2xl md:text-3xl lg:text-5xl font-playfair">
            {item?.innerh1} -
            <span className="font-normal font-inter">Services</span>
          </h1>
        </div>
        <div className="px-4 md:px-10 lg:px-14 py-9 flex items-start gap-10 h-full">
          <div className="bg-[#DDDDDD] min-w-[375px] hidden md:block pt-4 px-5 h-full">
            <div className="bg-[url('/images/cbg.png')] w-full h-full py-24 mb-6 text-white flex items-center justify-center flex-col font-inter">
              <div className="font-semibold text-lg md:text-xl pb-6 whitespace-nowrap">
                Providing Varity <br /> Repair Services
              </div>
              <Link to={"/BookConsultaion"}>
                <button className="py-2 px-3 rounded-md md:px-5 lg:px-7 mb-6 bg-[#DD1F26] text-white font-semibold transition-all ease-in duration-300 hover:bg-white hover:text-black border-transparent border hover:border-black">
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

            <div className="py-16 mb-72">
              <div className="pb-6 hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
                <img src="/images/pdfbtn.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>
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

              <div className="py-12 px-12 flex items-center gap-7 flex-col md:flex-row mb-4 md:mb-10 lg:mb-16 bg-[#F4F4F4]">
                <div>
                  <img src="/images/avail.png" alt="" />
                </div>
                <div>
                  <img src="/images/freeestim.png" alt="" />
                </div>
                <div>
                  <img src="/images/priceaffordable.png" alt="" />
                </div>
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

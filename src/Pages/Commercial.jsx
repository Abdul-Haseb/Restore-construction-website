import { Link } from "react-router-dom";
import { TickMarkSvg } from "../component/Icons";
import MainLayout from "../component/Layout/MainLayout";
import { useEffect } from "preact/hooks";

const Commercial = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on component mount
  }, []);
  return (
    <MainLayout>
      <div className="md:-mt-10">
        <div className="bg-[url('/images/servicesbanner.png')] object-cover w-full h-full mb-10">
          <h1 className="px-4 md:px-10 lg:px-24 font-extrabold relative z-10 py-48 text-white text-2xl md:text-3xl lg:text-5xl text-center font-inter">
            STRUCTURAL STRENGTHENING
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
                +971 902 0000
              </div>
            </div>
            <h4 className="font-inter text-black text-xl md:text-2xl lg:text-3xl">
              Solutions for
            </h4>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Transport Tunnel
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Cable Tunnels
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Car Parks
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Swimming Pool
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Docks and Harbors
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Diaphragm Walls and Piles
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Water Treatment Plants
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Water Tanks
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Bridges
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Reservoirs
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Sewers
            </p>
            <p className="py-3 border-b font-inter text-[#7E7E7E] flex items-center gap-1">
              <TickMarkSvg />
              Liftpits
            </p>
            <div className="py-16 mb-72">
              <div className="pb-6 hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
                <img src="/images/servicepack.png" alt="" />
              </div>
              <div className="hover:scale-105 transition-all ease-in duration-300 cursor-pointer">
                <img src="/images/detail.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/images/structural.png" alt="image" />
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#1C2752] font-playfair pt-8 pb-3">
                Structural Strengthening{" "}
              </h2>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. hda akw naws Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. hda akw naws Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="bg-[#DD1F26] flex font-inter justify-end mb-8">
                <div className="bg-[#E2565D] w-[95%] text-white py-8 px-4 md:px-20">
                  <p className="italic mb-4 md:text-xl text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmodpordunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostronco laboris nisi ut
                    <p className="pt-3">
                      aliquip ex ea commodo consequat. hda akw naws”
                    </p>
                  </p>
                </div>
              </div>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. hda akw naws Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="py-12 px-12 flex items-center gap-7 flex-col md:flex-row mb-4 bg-[#F4F4F4]">
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
              <h2 className="text-[#0D0E10] font-semibold text-xl md:text-2xl lg:text-4xl font-inter pb-4">
                Key benefits With Our Service
              </h2>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. hda akw naws Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[#7E7E7E] md:text-lg font-inter text-justify pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. hda akw naws Lorem
              </p>
              <div>
                <p className="font-medium font-inter text-sm md:text-base text-[#7E7E7E] flex items-center gap-3 pb-4">
                  <TickMarkSvg />
                  experience investor Technician.
                </p>
                <p className="font-medium font-inter text-sm md:text-base text-[#7E7E7E] flex items-center gap-3 pb-4">
                  <TickMarkSvg />
                  Your Electrical and Security System.
                </p>
                <p className="font-medium font-inter text-sm md:text-base text-[#7E7E7E] flex items-center gap-3 pb-4">
                  <TickMarkSvg />
                  sources whereas high standards
                </p>
                <p className="font-medium font-inter text-sm md:text-base text-[#7E7E7E] flex items-center gap-3 pb-4">
                  <TickMarkSvg />
                  Credibly innovate granular internal
                </p>
                <p className="font-medium font-inter text-sm md:text-base text-[#7E7E7E] flex items-center gap-3 pb-4">
                  <TickMarkSvg />
                  services for domestic and commercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Commercial;

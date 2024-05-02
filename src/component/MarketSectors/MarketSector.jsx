import { Link } from "react-router-dom";
import { RightArrow } from "../Icons";
import data from "../jasonData/MarketSec";
const MarketSector = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="px-4 md:px-10 lg:px-24 py-12">
        <h4 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3 text-[#1C2752] ">
          Focused Market Sectors
        </h4>
        <p className="font-light md:text-xl text-[#7E7E7E] font-inter">
          At RESTORE, we take great pride in presenting an extensive array of
          specialized services crafted to meet the diverse requirements of our
          clients. With a team of seasoned professionals and an unwavering
          commitment to quality, we stand as your reliable partner in structural
          maintenance and restoration. Explore the range of services we offer;
        </p>
        <div className="grid grid-cols-2 pt-7 font-inter lg:grid-cols-3 justify-center items-center gap-5 md:gap-10 text-white">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative hover:scale-105 transition-all duration-300 hover:shadow-lg ease-in"
            >
              <Link to={item.link} state={{ item }}>
                <div>
                  <img src={item.image} alt="" className="w-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-2xl" />
                <div className="absolute bottom-2 z-10 p-2 md:p-4">
                  <h5 className="text-lg md:text-xl lg:text-2xl font-bold">
                    {item.heading}
                  </h5>
                  <p className="text-xs md:text-sm lg:text-base">{item.des}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end mt-10">
          <button className="font-thin text-xl flex items-center gap-2 font-inter">
            View All
            <span>
              <RightArrow color={"black"} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketSector;

import { Link } from "react-router-dom";
import { RightArrow } from "../Icons";

const data = [
  {
    image: "/images/vert-card.png",
    heading: "COMMERCIAL",
    des: "Commercial Projects by Restore",
    link: "/CommercialPage",
  },
  {
    image: "/images/Public.png",
    heading: "PUBLIC",
    des: "Public Projects by Restore",
    link: "/",
  },
  {
    image: "/images/Industrial.png",
    heading: "INDUSTRIAL",
    des: "Industrial Projects by Restore",
    link: "/",
  },
  {
    image: "/images/Power.png",
    heading: "POWER",
    des: "Power Projects by Restore",
    link: "/",
  },
  {
    image: "/images/Water.png",
    heading: "WATER & WASTE WATER",
    des: "Hydro Projects by Restore",
    link: "/",
  },
  {
    image: "/images/Transportation.png",
    heading: "TRANSPORTATION",
    des: "Transportation Projects by Restore",
    link: "/",
  },
];

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
          {data.map((data, index) => (
            <div key={index} className="relative ">
              <Link to={data.link}>
                <div>
                  <img src={data.image} alt="" className="w-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-2xl" />
                <div className="absolute bottom-2 z-10 p-2 md:p-4">
                  <h5 className="text-lg md:text-xl lg:text-2xl font-bold">
                    {data.heading}
                  </h5>
                  <p className="text-xs md:text-sm lg:text-base">{data.des}</p>
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

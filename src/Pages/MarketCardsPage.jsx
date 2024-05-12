import { useLocation } from "react-router-dom";
import { TickMarkSvg } from "../component/Icons";
import MainLayout from "../component/Layout/MainLayout";
import ProjectGallery from "../component/ProjectGallery/ProjectGallery";
import { useEffect } from "preact/hooks";

const data = [
  {
    image: "/images/onee.png",
    build: "Residential Buildings",
  },
  {
    image: "/images/twoo.png",
    build: "Institutions",
  },
  {
    image: "/images/threee.png",
    build: "Healthcare Facilities",
  },
  {
    image: "/images/fourth.png",
    build: "Offices",
  },
  {
    image: "/images/five.png",
    build: "Commercial Properties",
  },
  {
    image: "/images/six.png",
    build: "Parking Basements",
  },
];

const MarketCardsPage = () => {
  const location = useLocation();
  const { item } = location?.state;
  // console.log("item", item);
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on component mount
  }, []); // Run only on component mount
  return (
    <MainLayout>
      <div className="bg-[url('/images/commercialBanner.png')] object-cover w-full h-full md:-mt-10">
        <div className="flex items-start md:items-end flex-col md:flex-row pt-52 pb-12 px-4 md:px-10 lg:px-24 z-10 text-white gap-2">
          <h1 className=" relative  text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-inter">
            {item.innerH1}
          </h1>
          <p className="font-inter text-xl md:text-2xl lg:text-3xl">
            {item.innerH1p}
          </p>
        </div>
      </div>
      <section className="px-4 md:px-10 lg:px-24 py-10 md:py-20 font-inter">
        <h2 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3 text-[#1C2752] ">
          {item.innerH2}
        </h2>
        <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
          {item.innerP1}
        </p>
        <div className="bg-[#DD1F26] flex font-inter justify-end mb-6">
          <div className="bg-[#E2565D] w-[95%] text-white py-8 px-4 md:px-10">
            <p className="italic mb-4 md:text-xl text-center">{item.innerP2}</p>
          </div>
        </div>
        <p className="text-[#7E7E7E] text-justify lg:text-lg">{item.innerP3}</p>
      </section>
      <section className="px-4 md:px-10 lg:px-24 bg-gray-100 py-10 md:py-16 font-inter">
        <h3 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-4 text-[#1C2752] ">
          {item.innerH3}
        </h3>
        <p className="text-[#7E7E7E] text-justify pb-8 md:pb-14 lg:text-lg">
          {item.innerP4}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-7 lg:gap-10">
          {data.map(({ image, build }, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-3xl hover:scale-105 transition-all ease-in duration-300 hover:shadow-xl shadow-md"
            >
              <div>
                <img src={image} alt="image" className="rounded-t-3xl" />
              </div>
              <p className="font-medium text-xs md:text-lg lg:text-xl py-3 md:py-6">
                {build}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 md:px-10 lg:px-24 pt-10 md:pt-16 lg:pt-32 font-inter">
        <h4 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3">
          {item.innerH4}
        </h4>
        <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
          {item.innerP5}
        </p>
        <div>
          <p className="text-[#7E7E7E] pb-3 lg:text-lg flex items-center gap-2">
            <TickMarkSvg />
            {item.innerP6}
          </p>
          <p className="text-[#7E7E7E]  pb-3 lg:text-lg flex items-center gap-2">
            <TickMarkSvg />
            {item.innerP7}
          </p>
          <p className="text-[#7E7E7E]  pb-3 lg:text-lg flex items-start gap-2">
            <TickMarkSvg />
            {item.innerP8}
          </p>
        </div>
      </section>
      <section>
        <ProjectGallery />
      </section>
    </MainLayout>
  );
};

export default MarketCardsPage;

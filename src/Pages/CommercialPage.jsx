import { TickMarkSvg } from "../component/Icons";
import MainLayout from "../component/Layout/MainLayout";
import ProjectGallery from "../component/ProjectGallery/ProjectGallery";

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

const CommercialPage = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/commercialBanner.png')] object-cover w-full h-full -mt-10">
        <div className="flex items-start md:items-end flex-col md:flex-row pt-36 pb-10 px-4 md:px-10 lg:px-24 z-10 text-white gap-2">
          <h1 className=" relative  text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-inter">
            COMMERCIAL
          </h1>
          <p className="font-inter text-xl md:text-2xl lg:text-3xl">
            - Focused Market Sector
          </p>
        </div>
      </div>
      <section className="px-4 md:px-10 lg:px-24 py-20 font-inter">
        <h2 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3 text-[#1C2752] ">
          Commercial Facilities
        </h2>
        <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
          RESTORE in the commercial sector offers a range of specialized
          services aimed at enhancing the integrity & resilience of existing
          structures. These services include the application of advanced
          engineering techniques to fortify buildings against various structural
          challenges, such as aging, environmental factors, or changes in usage
          requirements. Common solutions involve the use of innovative materials
          and technologies to reinforce or retrofit structures, ensuring they
          meet contemporary safety standards and performance expectations.
        </p>
        <div className="bg-[#DD1F26] flex font-inter justify-end mb-6">
          <div className="bg-[#E2565D] w-[95%] text-white py-8 px-4 md:px-10">
            <p className="italic mb-4 md:text-xl text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              illum ducimus dolores tenetur placeat voluptate porro, labore
              quisquam animi quam, impedit architecto officia error, quibusdam
              et autem voluptatem? Doloribus, dolor!
            </p>
          </div>
        </div>
        <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
          Additionally, we provide comprehensive inspection and assessment
          services, identifying vulnerabilities and formulating tailored
          strategies for improvement. The goal is to extend the service life of
          commercial buildings, optimize their performance, and enhance overall
          safety, offering clients effective solutions that align with industry
          standards and regulations.
        </p>
      </section>
      <section className="px-4 md:px-10 lg:px-24 bg-gray-100 py-16 font-inter">
        <h3 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-4 text-[#1C2752] ">
          Commercial Work We Offer
        </h3>
        <p className="text-[#7E7E7E] text-justify pb-8 md:pb-14 lg:text-lg">
          Within the commercial sector, RESTORE brings forth extensive expertise
          in structural strengthening and repair, catering to a wide spectrum of
          critical areas. With a deep understanding of the unique challenges
          posed by various commercial structures, our team employs advanced
          techniques and innovative solutions to ensure optimal performance and
          longevity.
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
      <section className="px-4 md:px-10 lg:px-24 pt-32 font-inter">
        <h4 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3">
          Our Commitment to Quality Work
        </h4>
        <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
          At RESTORE, our commitment to quality work is unwavering, especially
          within the commercial sector. We understand the unique demands and
          complexities of commercial properties, which is why we strive to
          deliver excellence in every project we undertake. From structural
          strengthening to repair and maintenance, we approach each task with
          precision, expertise, and a dedication to ensuring the highest
          standards of quality. Our team of seasoned professionals leverages
          advanced techniques and innovative solutions to address the diverse
          needs of commercial structures, ultimately enhancing their safety,
          longevity, and performance.
        </p>
        <div>
          <p className="text-[#7E7E7E] pb-3 lg:text-lg flex items-center gap-2">
            <TickMarkSvg />
            Leveraging extensive expertise in structural strengthening and
            repair within the commercial sector.
          </p>
          <p className="text-[#7E7E7E]  pb-3 lg:text-lg flex items-center gap-2">
            <TickMarkSvg />
            Implementing advanced techniques and innovative solutions tailored
            to the unique demands of commercial properties.
          </p>
          <p className="text-[#7E7E7E]  pb-3 lg:text-lg flex items-start gap-2">
            <TickMarkSvg />
            Ensuring the highest standards of quality in every project to
            enhance safety, longevity, & performance of commercial structures.
          </p>
        </div>
      </section>
      <section>
        <ProjectGallery />
      </section>
    </MainLayout>
  );
};

export default CommercialPage;

import Cards from "../component/HeaderAndHero/Cards";
import { Border, OverViewSvg } from "../component/Icons";
import MainLayout from "../component/Layout/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/aboutusbanner.png')] object-cover w-full h-full -mt-10">
        <h6 className="px-4 md:px-10 lg:px-24 relative z-10 py-48  text-white text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-inter">
          ABOUT US
        </h6>
      </div>
      <div className="px-4 md:px-10 lg:px-24 ">
        <section className=" flex py-28 justify-center gap-10 items-center mb-16">
          <div className="font-inter flex-1">
            <p className="bg-gray-100 w-[320px] text-[#1C2752]  font-inter px-5 py-3 mb-10 font-medium text-2xl  flex gap-2 items-center">
              <span>
                <OverViewSvg />
              </span>
              Welcome to Restore
            </p>
            <h6 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-7 text-[#1C2752] ">
              Overview
            </h6>
            <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
              RESTORE is a technology-driven solution provider that uses the
              most advanced techniques to assist owners in maintaining their
              concrete assets. It provides IDB (investigate, design, & build)
              solutions ensuring the highest value for owners spending. IDB is a
              collaborative process in which owners, engineers, & construction
              teams work together to understand the condition of existing
              concrete structures, explore possible repair or strengthening
              options, and engineering solutions that best meet owners
              objectives, and deliver with the highest level of quality and
              safety.{" "}
            </p>
            <p className="text-[#7E7E7E] text-justify lg:text-lg">
              We believe in a customer-centric approach that ensures decisions
              are made in the best interest of our clients & with utmost
              transparency. This approach helps us develop a relationship of
              trust with our clients resulting in long-term business
              partnerships.
            </p>
          </div>
          <div className="flex-1 w-full h-full">
            <img src="/images/overview.png" alt="image" />
          </div>
        </section>
        <section className="pb-28">
          <Cards />
        </section>
        <section className="bg-[#DD1F26] flex font-inter justify-end mb-28">
          <div className="bg-[#E2565D] w-[95%] text-white py-8 px-4 md:px-10">
            <h6 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3">
              Mission:
            </h6>
            <p className="italic mb-4 md:text-xl">
              “Our mission is to become the trusted partner of our clients in
              maintaining existing civil infrastructure while making a
              meaningful difference in the lives of all associated individuals.”
            </p>
            <h6 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3">
              Vision:
            </h6>
            <p className="italic md:text-xl">
              “Our vision is to be the leader in developing and implementing
              innovative and most technologically advanced solutions to maintain
              existing civil infrastructure.”
            </p>
          </div>
        </section>
      </div>
      <section className="px-4 md:px-10 lg:px-24 bg-gray-100 pt-16 pb-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="bg-white w-[320px] text-[#1C2752]  font-inter px-5 py-3 mb-10 font-medium text-2xl  flex gap-2 items-center">
            <span>
              <OverViewSvg />
            </span>
            Welcome to Restore
          </p>
          <h6 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-7 text-[#1C2752]">
            Marching Towards Advancement
          </h6>
          <p className="text-[#7E7E7E] pb-6 lg:text-lg">
            Embarking on a journey marked by progress, RESTORE has continuously
            evolved with the passage of time, transforming our services from
            addressing the needs of small-scale buildings to pioneering
            solutions for high-rise structures. Our evolution is a testament to
            a commitment to innovation and staying at the forefront of
            engineering excellence.
          </p>
          <p className="text-[#7E7E7E] lg:text-lg">
            From the early days of basic concrete repairs, we have seamlessly
            transitioned into a realm of high-technology engineering services.
            At RESTORE, evolution is not just a process; it's a conscious effort
            to elevate our capabilities, ensuring that our clients benefit from
            state-of-the-art technologies and the pinnacle of engineering
            services. We're proud of how far we've come, always improving
            ourselves to offer the best possible solutions for modern
            challenges.
          </p>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div>
              <Border />
            </div>
            <div className="relative">
              <span className="bg-[#1C2752] absolute -top-5 text-[#E2565D] font-extrabold font-inter text-lg py-1 px-10">
                2022
              </span>
              <p className="text-[#7E7E7E] bg-white py-6 px-8 font-inter">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <Border />
            </div>
            <div className="relative">
              <span className="bg-[#1C2752] absolute -top-5 text-[#E2565D] font-extrabold font-inter text-lg py-1 px-10">
                2020
              </span>
              <p className="text-[#7E7E7E] bg-white py-6 px-8 font-inter">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <Border />
            </div>
            <div className="relative">
              <span className="bg-[#1C2752] absolute -top-5 text-[#E2565D] font-extrabold font-inter text-lg py-1 px-10">
                2015
              </span>
              <p className="text-[#7E7E7E] bg-white py-6 px-8 font-inter">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-10 lg:px-24 py-28 flex flex-col items-center">
        <p className="bg-gray-100 max-w-[200px] text-[#1C2752]  font-inter px-5 py-3 mb-2 font-medium text-2xl  flex gap-2 items-center">
          <span>
            <OverViewSvg />
          </span>
          History
        </p>
        <h6 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-7 text-[#1C2752] ">
          A Legacy of Innovation & Dedication
        </h6>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <img src="/images/engineer.png" alt="Engineer" />
          </div>
          <div className="flex-1">
            <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
              The construction market in UAE steeply spiked at the beginning of
              21st century, leaving local construction companies lagged in
              matching the growing construction needs within the country. The
              gap demanded the need for companies with international experiences
              to serve the UAE construction market. RESTORE founders realized
              the need for a local company that could match advanced
              construction standards in the field of concrete durability and
              strengthening. As a result, RESTORE was born in year 2018; the
              first UAE based company with global expertise in concrete
              durability and strengthening.
            </p>
            <p className="text-[#7E7E7E] text-justify pb-6 lg:text-lg">
              Since its inception, RESTORE has successfully delivered over 100
              repair and strengthening projects, including some of the most
              complex projects in the Middle East. Its engineered approach to
              achieving client objectives allowed it to stand out in market.
              Today, RESTORE is one of the largest specialty companies in the
              UAE for concrete durability and strengthening and plans to extend
              its footprint in other Gulf countries and South Asia.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;

import MainLayout from "../component/Layout/MainLayout";

const WorkFlowPage = () => {
  return (
    <MainLayout>
      <div className="bg-[url('/images/workBanner.png')] object-cover w-full h-full -mt-10">
        <div className="py-48 px-4 md:px-10 lg:px-24 z-10 text-white gap-2">
          <h1 className=" relative  text-2xl md:text-3xl lg:text-5xl text-center font-extrabold font-inter">
            Improve Workflow with Bluecollar Construction
          </h1>
        </div>
      </div>
      <div className="max-w-[1129px] mx-auto py-32">
        <div>
          <img src="/images/workimg.png" alt="image" />
        </div>
        <div className="max-w-[770px] mx-auto pt-11 text-[#7E7E7E] font-inter">
          <p className=" text-justify pb-8 lg:text-lg">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium dynamically target high-payoff intellectual
            capital for customized technologies objectively integrate emerging
            core competencies before process-centric communities dramatically
            evisculate holistic innovation rather than client-centric data.
          </p>
          <h2 className="font-semibold text-2xl md:text-3xl font-playfair lg:text-4xl mb-3 text-[#1C2752]">
            Perfect Work Time For Workers
          </h2>
          <p className=" text-justify pb-8 lg:text-lg">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium dynamically target high-payoff intellectual
            capital for customized technologies objectively integrate emerging
            core competencies before process-centric communities dramatically
            evisculate holistic innovation rather than client-centric data.
          </p>
          <div className="flex items-center gap-3 pb-6">
            <div className="w-2 h-2 rounded-full bg-gray-400" /> 1. Listen to
            what they say about you
          </div>
          <div className="flex items-center gap-3 pb-6">
            <div className="w-2 h-2 rounded-full bg-gray-400" /> 2. Randomised
            words which.
          </div>
          <div className="flex items-center gap-3 pb-6">
            <div className="w-2 h-2 rounded-full bg-gray-400" /> 3. Internet
            tend to repeat predefined chunks
          </div>
          <div className="bg-[#DD1F26] flex font-inter justify-end mb-8">
            <div className="bg-[#E2565D] w-[95%] text-white py-8 px-4 md:px-10">
              <p className="italic mb-4 md:text-xl">
                “The job market of the future will consist of those jobs that
                robots cannot perform. Our blue-collar work is pattern
                recognition, making sense of what you see. Gardeners will still
                have jobs because every garden is different.”
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl font-inter md:text-2xl  lg:text-3xl mb-3 text-[#1C2752]">
              Make real time a day services
            </h3>
            <p className=" text-justify pb-8 lg:text-lg">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <div className="flex items-center gap-3 pb-6">
              1. Interactively procrastinate high-payoff content
            </div>
            <div className="flex items-center gap-3 pb-6">
              2. Randomised words which don't look even slightly believable.
            </div>
            <div className="flex items-center gap-3 pb-6">
              3. Your best work, together in one package that works seamlessly
              from your computer
            </div>
            <div className="flex items-center gap-3 pb-6">
              4. Delivers the tools you need to save time Improve field
              performance always
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WorkFlowPage;

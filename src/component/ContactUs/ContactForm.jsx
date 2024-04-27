import { WhyUsSvg } from "../Icons";

const ContactForm = () => {
  return (
    <div
      className="py-36 px-4 md:px-10 lg:px-24 font-inter bg-white flex flex-col md:flex-row  gap-10 items-center justify-between 2xl:justify-center
    "
    >
      <div className="flex-1">
        <h6 className="font-semibold text-3xl md:text-4xl font-playfair lg:text-5xl text-[#1C2752] pb-8">
          FREE CONSULTATION
        </h6>
        <div className="max-w-[456px] pb-6">
          <img src="/images/contact.png" alt="image" />
        </div>
        <h6 className="font-bold text-[#1C2752] text-xl md:text-2xl lg:text-3xl pb-3">
          How Can We Help?
        </h6>
        <p className="text-[#7E7E7E] pb-6 max-w-[507px]">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt. Interdum et malesuada.{" "}
        </p>
        <p className="text-[#7E7E7E] max-w-[507px] pb-6">
          n pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed
          quam tristique, facilisis est ac, interdum velit. enean sed quam
          tristique, facilisis est ac, interdum velit.
        </p>
        <div className="flex items-center gap-5">
          <div className="flex flex-col bg-[#F4F4F4] p-6 max-w-36 text-center shadow-sm">
            <span className="text-[#E2565D] text-3xl md:text-5xl font-bold ">
              35
            </span>{" "}
            <span className="font-extrabold text-[#1C2752]">
              Year of <br /> Experience
            </span>
          </div>
          <div className="text-[#7E7E7E] flex flex-col gap-3">
            <p>- Sed varius ipsum lacus</p>
            <p>- Pulvinar tortor dignissim sit amet.</p>
            <p>- Quisque tristique diam quis placerat</p>
            <p>- Aliquam id ante suscipi fringilla.</p>
          </div>
        </div>
      </div>
      <div className="text-center flex-1">
        <p className="bg-gray-100 w-[250px] mx-auto text-[#1C2752]  font-inter px-5 py-3 font-medium text-2xl mb-3 flex items-center">
          <span>
            <WhyUsSvg />
          </span>
          Meet Us
        </p>
        <h6 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1C2752] pb-10">
          Book your Appointment
        </h6>
        <div className="bg-gray-100 px-12  py-16 flex flex-col items-center gap-10">
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="text-[#7E7E7E] py-4 md:py-6 px-6 rounded-md shadow-md md:px-8 w-full outline-none"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email Address"
              className="text-[#7E7E7E] py-4 md:py-6 rounded-md shadow-md px-6 md:px-8 w-full outline-none"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Phone Number"
              className="text-[#7E7E7E] py-4 rounded-md md:py-6 shadow-md px-6 md:px-8 w-full outline-none"
            />
          </div>

          <div className="w-full">
            <textarea
              className="w-full h-40 py-4 md:py-6 rounded-md px-6 shadow-md md:px-8 resize-none outline-none"
              placeholder="Service Description"
            />
          </div>
          <div className="w-full">
            <button className="bg-[#E2565D] w-full text-white py-5 font-semibold md:text-xl hover:bg-white  transition-all duration-300 ease-in hover:text-[#E2565D] rounded-md shadow-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.description)
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // If validation fails, stop

    emailjs
      .sendForm(
        "service_5r7e25d", // Replace with your service ID from EmailJS
        "template_e50kkhy", // Replace with your template ID
        form.current,
        "obrfZiu-qrqils1ec" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          // Optionally reset the form fields
          setFormData({
            name: "",
            email: "",
            phone: "",
            description: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message failed to send. Please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-36 px-4 md:px-10 lg:px-24 font-inter bg-white flex flex-col md:flex-row items-center gap-10 justify-between 2xl:justify-center">
      <div className="flex-1">
        <h6 className="font-semibold text-3xl md:text-4xl font-playfair lg:text-5xl text-[#1C2752] pb-8">
          FREE CONSULTATION
        </h6>
        <div className="max-w-[500px] pb-6">
          <img src="/images/contact.png" alt="image" />
        </div>
        <h6 className="font-bold text-[#1C2752] text-xl md:text-2xl lg:text-3xl pb-3">
          How Can We Help?
        </h6>
        <p className="text-[#7E7E7E] pb-6 max-w-[700px]">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt. Interdum et malesuada.{" "}
        </p>
        <p className="text-[#7E7E7E] max-w-[700px] pb-6">
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
        <h6 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1C2752] pb-10">
          Book your Appointment
        </h6>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 px-12 py-16 flex flex-col items-center gap-10"
        >
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="text-[#7E7E7E] py-3 md:py-4 px-6 rounded-md shadow-md md:px-8 w-full outline-none"
            />
            {errors.name && <p className="text-red-500 pt-2">{errors.name}</p>}
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="text-[#7E7E7E] py-3 md:py-4 rounded-md shadow-md px-6 md:px-8 w-full outline-none"
            />
            {errors.email && (
              <p className="text-red-500 pt-2">{errors.email}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="text-[#7E7E7E] py-3 rounded-md md:py-4 shadow-md px-6 md:px-8 w-full outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 pt-2">{errors.phone}</p>
            )}
          </div>
          <div className="w-full">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-40 py-3 md:py-4 rounded-md px-6 shadow-md md:px-8 resize-none outline-none"
              placeholder="Service Description"
            />
            {errors.description && (
              <p className="text-red-500 pt-2">{errors.description}</p>
            )}
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-[#E2565D] w-full text-white py-5 font-semibold md:text-xl hover:bg-white transition-all duration-300 ease-in hover:text-[#E2565D] rounded-md shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

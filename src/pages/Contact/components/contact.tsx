import { useState } from "react";
import local from "../../../assets/img-contact/local.png";
import phone from "../../../assets/img-contact/phone.png";
import clock from "../../../assets/img-contact/clock.png";

const ContactInformation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const validateName = (value:string) => {
    if (!/^[A-Za-z]{2,}(\s[A-Za-z]{2,})*$/.test(value)) {
      return "Name must contain only letters and be at least 2 characters long";
    }
    return "";
  };

  const validateEmail = (value:string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Enter a valid email address";
    }
    return "";
  };

  const handleSubmit = () => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);

    setErrors({ name: nameError, email: emailError });

    if (!nameError && !emailError) {
      setSuccessMessage("Form submitted successfully!");
      setName("");
      setEmail("");
      setErrors({ name: "", email: "" });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col font-poppins  m-auto mt-28 mb-28 items-center">
      <div className="flex flex-col text-center">
        <h1 className="font-semibold text-[34px]">Get In Touch With Us</h1>
        <p className="text-[16px] font-normal text-[#9F9F9F] w-[644px]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-row w-[1058px] h-[923px] justify-between items-center  ">
        <div className="flex flex-col w-56 gap-2 items-center">
          <div className="font-poppins">
            <img src={local} alt="" className="w-[22px] h-[28px]" />
            <h1 className="font-medium text-[24px]">Address</h1>
            <p className="font-regular text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="font-poppins">
            <img src={phone} alt="" className="w-[22px] h-[22px]" />
            <h1 className="font-medium text-[24px]">Phone</h1>
            <p className="font-regular text-[16px]">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
          </div>
          <div className="font-poppins">
            <img src={clock} alt="" className="w-[23px] h-[23px]" />
            <h1 className="font-medium text-[24px]">Working Time</h1>
            <p className="font-regular text-[16px]">Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        <div className="flex-col justify-center items-center gap-1 font-poppins">
          <p className="mb-2 mt-2 text-[16px] font-medium">Your name</p>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input
            type="text"
            placeholder="Abc"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[528px] h-[75px] flex border border-[#9F9F9F] rounded-[10px] px-4 py-2"
          />

          <p className="mb-2 mt-2 text-[16px] font-medium">Email address</p>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            type="text"
            placeholder="Abc@def.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[528px] h-[75px] border border-[#9F9F9F] rounded-[10px] px-4 py-2"
          />

          <p className="mb-2 mt-2 text-[16px] font-medium">Subject</p>
          <input
            type="text"
            placeholder="This is optional"
            className="w-[528px] h-[75px] border border-[#9F9F9F] rounded-[10px] px-4 py-2"
          />

          <p className="mb-2 mt-2 text-[16px] font-medium">Message</p>
          <input
            type="text"
            placeholder="Hi! I’d like to ask about"
            className="w-[527px] h-[120px] border border-[#9F9F9F] rounded-[10px] px-4 py-2"
          />

          {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}

          <div>
            <button
              onClick={handleSubmit}
              className="w-[237px] h-[55px] bg-[#B88E2F] border rounded-[5px] text-white text-[16px] font-normal mb-2 mt-[49px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;


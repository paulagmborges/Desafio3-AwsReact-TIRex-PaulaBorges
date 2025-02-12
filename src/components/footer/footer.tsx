import { Link, useLocation } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { useState } from "react";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email!");
      setSuccessMessage(null);
      return;
    }

    setError(null);
    setSuccessMessage("Registration completed successfully!");
  };

  return (
    <footer className="w-full h-[505px] flex flex-col  items-center px-[100px] py-[48px] ">
      <div className="flex flex-row justify-between w-full h-[419px]">

        <div className="flex flex-col gap-[48px]">
          <h1 className="text-[24px] font-bold font-poppins">Funrio</h1>

          {isHome && <SocialLinks />}

          <div className="w-[285px]">
            <p className="font-regular text-[16px] text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,</p>
            <p className="font-regular text-[16px] text-[#9F9F9F]">FL 33134 USA</p>
          </div>
        </div>

        <ul className="flex flex-col font-medium   h-[312px] justify-between text-[16px]">
          <li className="text-[#9F9F9F]   h-[24px]  lineHeight-24">Links</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <ul className="flex flex-col   h-[312px]  justify-between font-poppins text-[16px] font-medium  ">
          <li className="text-[#9F9F9F]   h-[24px]  font-size-[16px] lineHeight-24">Help</li>
          <li><Link to="/">Payment Options</Link></li>
          <li><Link to="/">Returns</Link></li>
          <li><Link to="/">Privacy Policies</Link></li>
        </ul>

        <div className="flex flex-col font-medium gap-[53px]">
          <h2 className="text-[#9F9F9F] font-poppins font-medium text-[16px] lineHeight-24">Newsletter</h2>
          <div className="flex items-center gap-[11px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-transparent focus:outline-none text-[#9F9F9F] font-poppins font-regular text-[14px] border-b-2 ${error ? "border-red-500" : "border-black"}`}
            />
            <button
              onClick={handleSubscribe}
              className="font-poppins font-medium text-[14px] border-b-2 border-black hover:border-gray-700 transition"
            >
              SUBSCRIBE
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
        </div>
      </div>
      <div className="flex justify-start w-full pt-[35px] border-t">
        <p className="font-normal font-poppins text-[16px] items-start lineHeight-24">2025 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;

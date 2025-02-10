import { Link, useLocation } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="w-full h-[505px] flex flex-col  items-center px-[100px] py-[48px] ">
      <div className="flex flex-row justify-between w-full h-[419px]">

        <div className="flex flex-col gap-[48px]">
          <h1 className="text-[24px] font-bold font-poppins">Funrio</h1>

          {isHome && <SocialLinks />}

          <div className="w-[285px]">
            <p className=" font-regular text-[16px] text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,</p>
            <p className=" font-regular text-[16px] text-[#9F9F9F]">FL 33134 USA</p>
          </div>
        </div>

       
          <ul className="flex flex-col font-medium   h-[312px] justify-between text-[16px]">
            <li className="text-[#9F9F9F]   h-[24px]  lineHeight-24">Links</li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><Link to="/error" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>

          <ul className="flex flex-col   h-[312px]  justify-between font-poppins text-[16px] font-medium  ">
            <li className="text-[#9F9F9F]   h-[24px]  font-size-[16px] lineHeight-24">Help</li>
            <li ><Link to="/" >Payment Options</Link></li>
            <li ><Link to="/" >Returns</Link></li>
            <li ><Link to="/" >Privacy Policies</Link></li>
          </ul>

        <div className="flex flex-col font-medium gap-[53px]">
          <h2 className="text-[#9F9F9F] font-poppins font-medium text-[16px] lineHeight-24">Newsletter</h2>
          <div className="flex items-center gap-[11px] ">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="bg-transparent focus:outline-none text-[#9F9F9F] font-poppins font-regular text-[14px] border-b-black border-b-2  "
            />
            <button className="font-poppins font-medium text-[14px] lineHeight-24 border-b-black border-b-2 ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full pt-[35px] border-t">

       
        <p className="font-normal font-poppins text-[16px] items-start lineHeight-24 ">2025 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

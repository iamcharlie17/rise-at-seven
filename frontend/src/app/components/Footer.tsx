import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";
import Logo from "./logos/Logo";


const footerLinks = [
  ["Services", "Work", "About", "Culture", "Meet the Risers"],
  ["Testimonials", "Blog & Resources", "Webinars", "Careers"],
  ["Sheffield", "Manchester", "London", "New York", "Contact"],
];

const socialIcons = [
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
];

const Footer = () => {
  return (
    <footer className="px-2 lg:px-4">
      <div className="bg-black rounded-2xl text-white px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className=" col-span-2 space-y-3 lg:space-y-6 lg:max-w-144">
            <h1 className="text-lg lg:text-3xl font-medium leading-none">
              Stay updated with Rise news
            </h1>
            <div className="relative">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="bg-[#282828] p-4 lg:p-6 pr-24 w-full rounded-full outline-none focus:ring-2 focus:ring-[#B2F6E3] transition-shadow"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="-rotate-45 p-3 lg:p-4 bg-[#B2F6E3] rounded-full text-black hover:bg-white hover:rotate-45 transition-all">
                  <HiArrowRight size={24} />
                </div>
              </button>
            </div>
            <div className="text-black flex gap-2 items-center flex-wrap">
              {socialIcons.map((Icon, i) => (
                <div key={i} className="flex gap-1 items-center text-sm lg:text-sm px-1 lg:px-2 py-0.5 bg-white rounded-full hover:rounded-sm transition-all">
                  <Icon />
                  <div className="-rotate-45">
                    <HiArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {footerLinks.map((col, i) => (
            <div key={i} className="border-l border-l-[#282828] px-4">
              {col.map((link) => (
                <div
                  key={link}
                  className="group cursor-pointer text-sm lg:text-2xl font-medium overflow-hidden h-5 lg:h-8 w-fit"
                >
                  <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span className="flex items-center h-5 lg:h-8 transition-colors duration-100 group-hover:text-[#B2F6E3]">
                      {link}
                    </span>
                    <span className="flex items-center h-5 lg:h-8 text-[#B2F6E3]">
                      {link}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="my-12 lg:my-24">
          <Logo/>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center text-[10px] lg:text-sm">
          <div className="flex flex-wrap items-center lg:gap-4 gap-2">
            <h1>&copy; {new Date().getFullYear()} Rise at Seven Ltd. All rights reserved.</h1>
            <span>•</span>
            <h1>Company Number 12345678</h1>
            <span>•</span>
            <h1>VAT Registered GB 3224082084</h1>
            <span>•</span>
            <h1>Privacy Policy</h1>
            <span>•</span>
            <h1>Terms & conditions</h1>
          </div>
          <div>
            <h1>Website MadeByShape</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

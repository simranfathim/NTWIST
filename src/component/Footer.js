import React from "react";
import footer from "../images/footer.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row lg:flex-col lg:items-center lg:justify-between  bg-[#141c22] items-center justify-between flex-wrap h-72">
        <img
          src={footer}
          className=" w-28 h-20"
          alt="Logo of NTwist organisation"
        />

        <div className="mb-4 lg:mb-0 lg:flex-row lg:mr-8">
          <ul className="flex flex-wrap ">
            <li className="mr-4 mb-2 lg:mb-0">
              <a href="#" className="text-white font-mono ">
                Home
              </a>
            </li>
            <li className="mr-4 mb-2 lg:mb-0">
              <a href="#" className="text-white ">
                About Us
              </a>
            </li>
            <li className="mr-4 mb-2 lg:mb-0">
              <a href="#" className="text-white ">
                Contact Us
              </a>
            </li>
            <li className="mr-4 mb-2 lg:mb-0">
              <a href="#" className="text-white ">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2 lg:mb-0">
              <a href="#" className="text-white ">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <p className=" text-gray-600  mb-4 lg:mb-0 lg:mr-8 ">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>
        <div className="flex mb-4  items-center">
          <img
            src={icon1}
            className="bg-white w-5 mr-4 "
            alt="Logo of NTwist organisation"
          />
          <img
            src={icon2}
            className="bg-white w-5 "
            alt="Logo of NTwist organisation"
          />
        </div>
        <p className=" text-gray-600  mb-4 lg:mb-0 lg:mr-8 ">
          © 2022. Ntwist Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;

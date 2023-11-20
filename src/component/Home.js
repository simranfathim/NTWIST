import React, { useEffect, useState } from "react";
import icons8chevron from "../images/icons8chevron.png";
import homeimage from "../images/homeimage.png";
import flag from "../images/flag.png";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-prod.autonews.com/s3fs-public/styles/width_792/public/MINING-MAIN_i_0.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-800  opacity-70 z-10"></div>
        <div className="relative flex justify-center items-center   text-white z-20">
          <div className="flex-1 ">
            <h1 className="font-extrabold m-14  text-2xl sm:text-5xl text-center sm:text-left">
              Data-powered Solutions <br />
              for Industrial Excellence
            </h1>
            <button className="bg-blue-500 m-14 rounded-md text-white font-bold py-2 px-4 sm:text-base sm:text-left">
              Read More
            </button>
          </div>
          <div className="ml-10 flex-1 mt-60 overflow-hidden hidden sm:block">
            <div className="h-96 w-full relative ">
              <img
                className="absolute bottom-20 left-0 xl:w-full   object-cover opacity-100 hover:opacity-75 transition-opacity duration-500"
                src={homeimage}
                alt="NTwist Mining Machine Image"
              />
            </div>
          </div>

          <div>
            {/* Your content */}
            {show && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-blue-950 rounded-full text-white  w-16 h-16 px-4 py-2 shadow-md"
              >
                <img src={icons8chevron} />
              </button>
            )}
          </div>
          <div>
            {/* Your content */}
            {show && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 left-6 bg-white p-4 shadow-md z-50"
              >
                <div className="flag-lang flex items-center bg-white">
                  <img src={flag} className="w-5 h-4" alt="Language Flag" />
                  <h2 className="text-xl text-black font-bold ml-2">EN</h2>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

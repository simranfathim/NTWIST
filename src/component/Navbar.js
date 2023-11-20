import { useState, useEffect } from "react";
import menu from "../images/menu.png"
import footer from "../images/footer.png"
import ntwistlogodark from "../images/ntwistlogodark.png"


const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);


  useEffect(() => {
    if (scrollPosition > 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }, [scrollPosition]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${colorChange ? 'bg-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between  items-center py-4">
          <div className="flex  ">
          <img
          src={colorChange ? ntwistlogodark :footer }
          alt="Logo"
          className={`${colorChange ? 'logo-dark' : 'logo-light'} h-16`}
        />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${colorChange ? 'text-white' : 'text-gray-800'} focus:outline-none focus:text-white`}
            >
              <img src={menu} className="h-10 w-10"/>
            </button>
          </div>
          <div className={`md:flex flex-row items-center justify-between ${isMenuOpen ? 'block' : 'hidden'}`}>
            
            <ul className="md:flex md:flex-1 md:justify-between flex flex-col md:flex-row list-none">
             
              <li className=" flex ">
              <li>
                <a
                  href="#"
                  className={`${colorChange ? 'text-blue-950' : 'text-white'} block py-2 px-4 hover:text-white text-lg  font-semibold`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://ntwist.com/project/sustainability-assistant/"
                  className={`${colorChange ? ' text-blue-950' : 'text-white'} block py-2 px-4 hover:text-white  text-lg  font-semibold`}
                >
                  Industies
                </a>
              </li>
              <li>
                <a
                  href="https://ntwist.com/ai-software/"
                  className={`${colorChange ? 'text-blue-950' : 'text-white'} block py-2 px-4 hover:text-white  text-lg  font-semibold`}
                >
                  AI software
                </a>
              </li>
              <li>
                <a
                  href="https://ntwist.com/blog/"
                  className={`${colorChange ? 'text-blue-950' : 'text-white'} block py-2 px-4 hover:text-white  text-lg  font-semibold`}
                >
                 Blog
                </a>
              </li>
              <li>
                <a
                  href="https://ntwist.com/contact-us/"
                  className={`${colorChange ? 'text-blue-950' : 'text-white'} block py-2 px-4 hover:text-white  text-lg  font-semibold`}
                >
                 ContactUs
                </a>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

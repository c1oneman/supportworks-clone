import { Link } from "react-router-dom";
import SupportworksLogo from "../svg/SupportworksLogo.js";
import SupportworksLogoMobile from "../svg/SupportworksLogoMobile.js";
import MenuHamburger from "../svg/MenuHamburger.js";
import { useState } from "react";

const Nav = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  return (
    <div className="w-full border-b py-2 fixed z-10 top-0 bg-white">
      <nav className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center mx-2 sm:items-stretch justify-start">
            <Link to="/">
              <div className="hidden sm:block">
                <SupportworksLogo />
              </div>
              <div className="block sm:hidden">
                <SupportworksLogoMobile />
              </div>
            </Link>
          </div>
          <div className="flex-1 flex items-center mx-2 sm:items-stretch justify-end">
            <div
              className="block sm:hidden"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <MenuHamburger />
            </div>
          </div>
          <div className="pr-2 sm:static sm:inset-auto sm:pr-0 hidden sm:block">
            <div className="mx-5">
              <button
                onMouseEnter={(e) => setAboutDropdownOpen(true)}
                className="text-gray-700 px-3 py-2 font-bold hover:text-gray-400"
              >
                About ▾
              </button>
              {aboutDropdownOpen && (
                <div
                  class="origin-top-right absolute top-50 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none font-bold"
                  tabindex="-1"
                  onMouseLeave={(e) => setAboutDropdownOpen(false)}
                >
                  <Link
                    class="block px-4 py-2 text-md text-gray-700 hover:text-gray-500"
                    to="/company"
                  >
                    Company
                  </Link>
                  <Link
                    class="block px-4 py-2 text-md text-gray-700 hover:text-gray-500"
                    to="/people"
                  >
                    People
                  </Link>
                  <Link
                    class="block px-4 py-2 text-md text-gray-700 hover:text-gray-500"
                    to="/evergreen"
                  >
                    Evergreen
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/purpose"
            className="text-gray-700 px-3 py-2 font-bold mx-5 hover:text-gray-400 hidden sm:block"
            aria-current="page"
            onMouseEnter={(e) => setAboutDropdownOpen(false)}
          >
            Purpose
          </Link>
          <Link
            to="/careers"
            className=" text-gray-700 px-3 py-2 font-bold mx-5 hover:text-gray-400 hidden sm:block"
            aria-current="page"
            onMouseEnter={(e) => setAboutDropdownOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/partner"
            rel="noopener noreferrer"
            className="text-white bg-regal-blue px-4 py-1 rounded-full font-bold bg-blue ml-2 hidden sm:block"
            onMouseEnter={(e) => setAboutDropdownOpen(false)}
          >
            Partner with us
          </Link>
        </div>
      </nav>
      <div
        className={`z-50 m-0 h-screen w-2/3 absolute right-0 shadow-2xl bg-gray-50 ${
          mobileDropdownOpen ? "flex" : "hidden"
        }`}
      >
        <div
          className={`bg-gray-50 h-auto min-h-screen border-r-0 border-none p-8 
             flex-col max-h-full text-2xl font-bold`}
        >
          <div className="flex flex-col flex-grow overflow-y-auto items-start">
            <button onClick={(e) => setAboutDropdownOpen(!aboutDropdownOpen)}>
              About
            </button>
            <div
              className={`border-l-4 flex flex-col pl-2 text-xl font-normal text-gray-500 ${
                aboutDropdownOpen ? "hidden" : "block"
              }`}
            >
              <Link
                to="/company"
                onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Company
              </Link>
              <Link
                to="/"
                onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                People
              </Link>
              <Link
                to="/evergreen"
                onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Evergreen
              </Link>
            </div>
            <Link
              to="/"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Purpose
            </Link>
            <Link
              to="/"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Careers
            </Link>
            <Link
              to="/"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

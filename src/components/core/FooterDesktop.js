import { useState } from "react";
import { Link } from "react-router-dom";
import SupportworksLogo from "../svg/SupportworksLogo";
const FooterDesktop = () => {
  const [hoverCE, setHoverCE] = useState(false);
  const [hoverBW, setHoverBW] = useState(false);
  return (
    <div className="hidden sm:block w-full mt-24 border-b">
      {/* Upper footer section */}
      <div className="border-b max-w-6xl mx-auto">
        <div className="flex w-full flex-row flex-wrap pb-6 ">
          <div className="flex w-full sm:w-1/3 flex-row justify-start items-center">
            <div className="w-1/2">
              <SupportworksLogo />
            </div>
          </div>
          <div className="w-1/3 flex flex-row justify-center">
            <img
              src={`/assets/${hoverCE ? "CE.png" : "CE-bw.png"}`}
              alt="CE"
              className="w-1/4 h-auto m-2"
              onMouseEnter={() => setHoverCE(true)}
              onMouseLeave={() => setHoverCE(false)}
            />

            <img
              src={`/assets/${
                hoverBW
                  ? "Baird-Best-Places-to-Work-in-Omaha.jpg"
                  : "Baird-Best-Places-to-Work-in-Omaha-bw.jpg"
              }`}
              alt="CE"
              className="w-1/4 h-auto m-2"
              onMouseEnter={() => setHoverBW(true)}
              onMouseLeave={() => setHoverBW(false)}
            />
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="flex items-center text-gray-500 font-normal">
              <div className="flex flex-col mr-4">
                <Link to="/" className="hover:text-gray-700">
                  Company
                </Link>
                <Link to="/" className="hover:text-gray-700">
                  People
                </Link>
                <Link to="/" className="hover:text-gray-700">
                  Evergreen
                </Link>
              </div>
              <div className="flex flex-col ml-4">
                <Link to="/" className="hover:text-gray-700">
                  Purepose
                </Link>
                <Link to="/" className="hover:text-gray-700">
                  Careers
                </Link>
                <Link to="/" className="hover:text-gray-700">
                  News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower footer section */}
      <div className="max-w-6xl mx-auto py-4 flex text-gray-500 align-middle text-sm items-center">
        <div className="flex flex-row w-1/2">
          <p>Copy of Supportworks, Inc Website.</p>
          <Link to="/tos" className="mx-4">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-regal-blue font-bold mx-4">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-row w-1/2 justify-end">
          <a
            href="https://loneman.dev/"
            target="_blank"
            className="text-regal-blue font-bold mx-4"
            rel="noopener noreferrer"
          >
            View Clayton's Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;

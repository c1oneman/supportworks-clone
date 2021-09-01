import { useState } from "react";
import { Link } from "react-router-dom";
const FooterMobile = () => {
  const [hoverCE, setHoverCE] = useState(false);
  const [hoverBW, setHoverBW] = useState(false);
  return (
    <div className="block sm:hidden max-w-6xl mx-auto mt-36">
      {/* Upper footer section */}
      <div className="flex flex-row flex-wrap w-full pb-1">
        <div className="w-full flex flex-row justify-center items-center align-start text-lg">
          <div className="flex flex-col w-1/2 items-center">
            <img
              src={`/assets/${hoverCE ? "CE.png" : "CE-bw.png"}`}
              alt="CE"
              className="w-1/2 h-auto m-2"
              onMouseEnter={() => setHoverCE(true)}
              onMouseLeave={() => setHoverCE(false)}
            />
            <div className="flex flex-col font-bold">
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
          </div>

          <div className="flex flex-col w-1/2 items-center">
            <img
              src={`/assets/${
                hoverBW
                  ? "Baird-Best-Places-to-Work-in-Omaha.jpg"
                  : "Baird-Best-Places-to-Work-in-Omaha-bw.jpg"
              }`}
              alt="CE"
              className="w-1/2 h-auto m-2"
              onMouseEnter={() => setHoverBW(true)}
              onMouseLeave={() => setHoverBW(false)}
            />
            <div className="flex flex-col ml-4 font-bold">
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
      {/* Lower footer section */}
      <div className="p-8 flex text-gray-500 align-middle items-center">
        <div className="flex flex-col w-2/3 border-t-2 pt-8">
          <a
            href="https://github.com/c1oneman/supportworks-clone"
            className="mx-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project on Github
          </a>
          <Link to="/contact" className="text-regal-blue font-bold mx-4">
            Contact Us
          </Link>
          <a
            href="https://loneman.dev/"
            target="_blank"
            className="font-bold mx-4"
            rel="noopener noreferrer"
          >
            View Clayton's Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;

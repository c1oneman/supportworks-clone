import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
const CompanyDetail = ({ logo, logoScale, imageSrc, description, color }) => {
  return (
    <div className="flex w-full sm:w-1/3 mx-0 items-stretch justify-center">
      <div className="w-11/12 mb-6 sm:mb-0 shadow-lg rounded-md text-lg">
        <div className="w-full flex-1 flex-col h-full">
          <div className="flex flex-col h-full">
            <img
              alt="company"
              src={imageSrc}
              className={`w-full pt-2.5 bg-${color} rounded-t-md`}
            />
            <div className="w-9/10 pt-6 px-4 sm:px-6">
              <ReactSVG className={logoScale} src={logo} />
            </div>
            <div className="flex flex-col py-6 px-4 sm:px-6 h-full">
              <p className="text-gray-500 font-medium mb-5">{description}</p>
            </div>
            <div className="flex justify-center px-6 mb-8">
              <Link
                className={`bg-${color} align-bottom w-11/12 text-white px-2 py-1 rounded-full self-bottom font-bold text-center`}
                to="/"
              >
                Learn more
              </Link>
            </div>
            <div className="bg-hello-yellow w-0 h-0">
              <br></br>
            </div>
            <div className=" bg-happy-blue  w-0 h-0">
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;

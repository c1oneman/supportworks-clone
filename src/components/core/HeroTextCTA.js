import { Link } from "react-router-dom";
const HeroText = ({ title, cta, ctaLink }) => {
  return (
    <div className="flex sm:px-6 lg:px-8 mx-auto bg-regal-blue text-white justify-center items-center mt-20">
      <div className="max-w-6xl flex flex-row flex-wrap py-14 sm:py-36 items-center justify-center">
        <div className="w-full sm:w-1/2">
          <h1 className="text-4xl w-full font-bold text-white sm:text-5xl md:text-6xl sm:text-left text-center">
            {title}
          </h1>
        </div>
        <div className="flex w-full sm:w-1/2 justify-center mt-4">
          <Link
            className="rounded-full bg-white text-regal-blue font-medium px-10 py-2 sm:px-16 sm:py-4 sm:text-xl"
            to={ctaLink}
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

import { Link } from "react-router-dom";

const HalfSection = ({ flipped, cta, ctaLink, description, image, title }) => {
  return (
    <div
      className={`sm:max-w-6xl mx-8 sm:px-6 lg:px-8 sm:mx-auto flex flex-wrap-reverse ${
        flipped ? "flex-row sm:flex-row-reverse" : " flex-row sm:flex-row"
      } mt-16`}
    >
      <div className="flex flex-col w-full sm:w-1/2 justify-center items-start">
        <h1 class="text-3xl w-2/3 sm:w-full tracking-tight font-bold mb-4 mt-4 text-gray-900 sm:text-4xl">
          <span class="block xl:inline">{title}</span>
        </h1>

        <p className="my-4 sm:my-8 text-gray-500 sm:pr-32">{description}</p>
        <Link
          to={ctaLink}
          className="rounded-full bg-gray-900 text-white font-bold px-10 py-2"
        >
          {cta}
        </Link>
      </div>
      <div className="flex w-full sm:w-1/2 justify-center">
        <img alt="half-banner" src={image} />
      </div>
    </div>
  );
};

export default HalfSection;

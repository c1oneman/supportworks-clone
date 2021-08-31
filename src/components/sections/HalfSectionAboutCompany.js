const HalfSection = ({ flipped, cta, ctaLink, description, image, title }) => {
  return (
    <div
      className={`sm:max-w-6xl mx-8 sm:px-6 lg:px-8 sm:mx-auto flex flex-wrap-reverse ${
        flipped ? "flex-row sm:flex-row-reverse" : " flex-row sm:flex-row"
      } mt-16`}
    >
      <div className="flex flex-col w-full sm:w-1/2 justify-center items-start">
        <h1 class="text-3xl w-2/3 sm:w-full tracking-tight font-bold mb-4 mt-4 text-gray-900 sm:text-4xl">
          <span class="block xl:inline">What We Do</span>
        </h1>

        <p className="my-4 sm:my-4 text-gray-500 sm:pr-32">
          It’s simple: We help home-service contractors build successful
          businesses from A to Z. So, whether you’re a Foundation Supportworks
          dealer, a Hello Garage franchisee or a SolutionView customer, you know
          you’re backed by a company that’s dedicated to championing your
          success through genuine relationships and radical support.
        </p>
        <p className="my-4 sm:my-3 text-gray-500 sm:pr-32">We do this by:</p>
        <ul className="ml-5 text-gray-500 list-item list-disc sm:pr-32">
          <li>
            Researching and developing industry-leading products and
            technologies
          </li>
          <li>Providing world-class trainings and business coaching</li>
          <li>
            Facilitating the sharing of best practices among dealers and
            franchisees
          </li>
        </ul>
      </div>
      <div className="flex w-full sm:w-1/2 justify-center">
        <img alt="half-banner" src={image} />
      </div>
    </div>
  );
};

export default HalfSection;

const HeroText = ({ h1, p }) => {
  return (
    <div className="max-w-6xl sm:px-6 lg:px-8 mx-auto">
      <div class="py-14 sm:py-36 px-5 sm:px-0 text-center">
        <h1 class="text-2xl w-full mb-12 tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
          <span class="block xl:inline">{h1}</span>
        </h1>
        <p class="text-lg w-full sm:w-full tracking-tight font-medium text-gray-500 sm:text-lg md:text-2xl">
          {p}
        </p>
      </div>
    </div>
  );
};

export default HeroText;

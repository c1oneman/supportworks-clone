const HeroText = ({ h1, h2, p }) => {
  return (
    <div className="max-w-6xl sm:px-6 lg:px-8 mx-auto">
      <div class="text-left py-14 sm:py-36 px-5 sm:px-0">
        <h1 class="text-4xl w-full sm:w-1/2 tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">{h1}</span>
        </h1>
        <h2 class="text-2xl w-full tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl">
          {h2}
        </h2>
        <p class="text-2xl w-full sm:w-full tracking-tight font-medium text-gray-500 sm:text-2xl md:text-3xl">
          {p}
        </p>
      </div>
    </div>
  );
};

export default HeroText;

import HeroText from "../core/HeroText";
import EvergreenPrinciple from "../core/EvergreenPrinciple";
import WhatThisMeans from "../sections/WhatThisMeans";
const Evergreen = () => {
  return (
    <div className="w-full mt-20">
      <HeroText h1={"Certified Evergreen"} />
      <div className="flex sm:px-6 lg:px-8 mx-auto bg-regal-blue text-white justify-center items-center">
        <div className="max-w-6xl flex flex-row flex-wrap py-14 sm:py-36 items-center justify-center text-center">
          Pretend a video is here. I did not have the time to make a video
          player.
        </div>
      </div>
      <HeroText h2={"Aligned by 7 Evergreen Principles"} />
      <div className="max-w-6xl sm:px-6 lg:px-8 mx-auto">
        <EvergreenPrinciple
          h1="Purpose"
          p="Being passionately driven by a compelling vision and mission."
          id="1"
        />
        <EvergreenPrinciple
          h1="Perseverance"
          p="Having the ambition and resilience to overcome and keep pursuing the mission indefinitely into the future."
          id="2"
        />
        <EvergreenPrinciple
          h1="People First"
          p="Engaging a workforce of talented associates who excel as a team and are motivated by the mission and the culture, as well as the total compensation, in the belief that by taking care of them, they will then take care of the customers, suppliers, partners, communities and their families."
          id="3"
        />
        <EvergreenPrinciple
          h1="Profit"
          p="Not mistaking profit as the purpose of a business; but recognizing it is essential to survival and independence, and the most accurate measure of customer value delivered."
          id="4"
        />
        <EvergreenPrinciple
          h1="Private"
          p="Taking advantage of the ability of closely-held private companies to have longer investment horizons, greater confidentiality around strategies, and more operating flexibility than public or exit-oriented businesses."
          id="5"
        />
        <EvergreenPrinciple
          h1="Paced Growth"
          p="Having the discipline to focus on long-term strategy, balance short-term and long-term performance, and grow steadily and consistently from year to year."
          id="6"
        />
        <EvergreenPrinciple
          h1="Pragmatic Innovation"
          p="Embracing a continuous-improvement process built around taking capital-efficient, calculated risks to innovate creatively within constraints."
          id="7"
        />
      </div>

      <WhatThisMeans />
    </div>
  );
};

export default Evergreen;
